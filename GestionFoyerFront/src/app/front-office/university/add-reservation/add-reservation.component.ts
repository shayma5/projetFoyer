import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/Service/bloc/bloc-service.service';
import { ChambreServiceService } from 'src/app/Service/chambre/chambre-service.service';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { UniversityService } from 'src/app/Service/university/university.service';
import { Bloc } from 'src/app/models/Bloc';
import { Chambre } from 'src/app/models/Chambre';
import { Foyer } from 'src/app/models/foyer';
import { Reservation } from 'src/app/models/reservation';
import { University } from 'src/app/models/university';
import { UserServiceService } from 'src/app/user/user-service.service';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  
    reservationForm!:FormGroup;
    selectedUniversity!: University;
    selectedFoyer!: Foyer;
    selectedBloc!: Bloc;
    selectedChambre!: Chambre;
    private URL = 'http://localhost:9090/reservation';
  constructor(private fb: FormBuilder,
    private universityService: UniversityService,
    private foyerService: FoyerService,
    private blocService: BlocService,
    private chambreService: ChambreServiceService,
    private userService: UserServiceService,
    private http: HttpClient,
    private router: Router
    ){ };
    currentDate: Date = new Date();
    ngOnInit(): void {
      this.reservationForm = this.fb.group({
        universityName: [
          { value: this.universityService.getSelectedUniversity()?.nomUniversite, disabled: true },
          Validators.required
        ],
        foyerName: [
          { value: this.foyerService.getSelectedFoyer()?.nomFoyer, disabled: true },
          Validators.required
        ],
        chambreName: [
          { value: this.chambreService.getSelectedChambre()?.numeroChambre, disabled: true },
          Validators.required
        ],
        schoolYear: ['', Validators.required],
        reservationDate: [this.formatDate(this.currentDate), Validators.required],
      });
    }
    
    formatDate(date: Date): string {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }

  onSubmit() {

    const userString = localStorage.getItem('user');
    const cin = userString ? JSON.parse(userString).cin : null;
    const selectedChambre = this.chambreService.getSelectedChambre()?.idChambre;
    this.http.put<Reservation>(
        `${this.URL}/adduniversitychambrebloc/${selectedChambre}/${cin}`,
        null
      ).subscribe(
        (result) => {
        console.log('Reservation added successfully:', result);
        this.router.navigate(['/front/reservations/reservationlist']);
        },
        (error) => {
          console.error('Error adding reservation:', error);
          this.router.navigate(['/front/reservations/reservationlist']);
        }
      );
  }
}