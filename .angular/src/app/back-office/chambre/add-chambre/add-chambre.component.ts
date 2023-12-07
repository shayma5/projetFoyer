import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChambreServiceService } from 'src/app/Service/chambre/chambre-service.service';
import { TypeChambre } from 'src/app/models/TypeChambre.enum';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  TypeChambre = TypeChambre;


  blocNames: string[] = [];
  selectedBloc: string = "";


  constructor(private es: ChambreServiceService, private router: Router) { }
  ngOnInit(): void {this.fetchBlocNames()}


  addChambre(chambreData: any) {

    console.log("chambre data :"+chambreData);
    this.es.addChambre(chambreData).subscribe(
      () => {
        // Handle a successful response (status code 200) here
        this.router.navigate(['back/chambre/chambrelist']);
      },
      (error: HttpErrorResponse) => {
        // Handle the error here
        if (error.status === 200) {
          // Consider a status code of 200 as success and navigate
          this.router.navigate(['back/chambre/chambrelist']);
        } else {
          console.error('Error adding Chambre:', error);
          // Handle the error as needed, e.g., display an error message to the user
        }
      }
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


}
