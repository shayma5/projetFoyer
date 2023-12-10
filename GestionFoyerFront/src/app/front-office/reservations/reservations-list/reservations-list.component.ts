import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/Service/reservation/reservation.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent {
  reservation: any[] = [];
  reservations!: Reservation[];

  constructor(
    
    private http: HttpClient,
    private ReservationService: ReservationService,
    
  ) { }


  ngOnInit(): void {
    //this.fetchReservations();
    this.fetchReservation();

  }
  fetchReservation(): void {
    this.ReservationService.getReservationsForCurrentUser().subscribe(
      data => {
        this.reservations = data;
      },
      error => {
        console.error('Error fetching reservations:', error);
      
      }
    );
  }
  


//  fetchReservations() {
  //    this.http.get<any[]>('http://localhost:9090/reservation/getAll')
  //    .subscribe((data) => {
 //       this.reservation = data;
 //     });
 // }

  isCurrentYear(dateString: string): boolean {
    const yearFromDatabase = new Date(dateString).getFullYear();
    const currentYear = new Date().getFullYear();
    return yearFromDatabase === currentYear;
  }

}