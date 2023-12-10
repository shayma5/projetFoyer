import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreServiceService } from 'src/app/Service/chambre/chambre-service.service';

@Component({
  selector: 'app-edit-chambre',
  templateUrl: './edit-chambre.component.html',
  styleUrls: ['./edit-chambre.component.css']
})
export class EditChambreComponent {

  idChambre!: Number;
  chambre!: any;
  updateForm!: FormGroup;
  blocNames: string[] = [];


  constructor(private formBuilder: FormBuilder, private actRoute: ActivatedRoute, private es: ChambreServiceService, private router: Router) { }
  ngOnInit(): void {
    this.getParam();
    this.fetchBlocNames();
    this.es.getChambre(this.idChambre).subscribe((data) => {
      this.chambre = data
      this.updateForm = new FormGroup({
        numeroChambre: new FormControl(this.chambre.numeroChambre),
        typeC: new FormControl(this.chambre.typeC),
        nomBloc: new FormControl(this.chambre.nomBloc),
      });
    });
  }

  update() {
    const updatedData = this.updateForm.value;
    console.log(updatedData);
    this.es.editChambre(this.idChambre, updatedData).subscribe(
      () => this.router.navigate(['back/chambre/chambrelist'])
    );
  }

  fetchBlocNames() {
    this.es.getBlocNames().subscribe(
      names => {
        this.blocNames = names;
      },
      error => {
        console.error('Error fetching foyer names:', error);
      }
    );
  }
  getParam() {
    //this.id= Number( this.actR.snapshot.paramMap.get('param'));
    this.actRoute.paramMap.subscribe(data => this.idChambre = Number(data.get('param')));
  }

}
