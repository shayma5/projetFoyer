import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { UniversityService } from 'src/app/Service/university/university.service';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent  {
  constructor(private Router:Router, private universityService: UniversityService ,private foyerService: FoyerService ){}
  university: University = new University();
  universities!:University[];
  listNameFoyer !:string[];
  
  k1!:number;
  ngOnInit(){
    this.universityService.getAll().subscribe(data => 
      this.universities = data
    );
    // this.foyerService.getNom().subscribe(data => 
    //   this.listNameFoyer = data
    // );
  }
  add(F:NgForm){
    
    //const nomFoyer = F.controls['nomFoyer'].value;
    
    //console.log(nomFoyer)
    // this.foyerService.getId(nomFoyer).subscribe(data => 
    //   this.k1 = data
    // );
    
    const university:University={
     "idUniversite":this.universities.length+1,
     "nomUniversite": F.controls['nom'].value,
     "adresse": F.controls['adresse'].value,
    
     
 }
 console.log(this.k1)
 console.log('Objet University:', university);
    this.universityService.create(university).subscribe(
    //   (universite) => {
      
    //   this.affecterFoyer(nomFoyer, universite.idUniversite);

     
    // },
        ()=>{alert('added seccesfully!!');
       this.Router.navigate(['/back/univesite']);}

       
       )
   
 }
//  affecterFoyer(nameF: string, idUniv: number): void {
//   this.universityService.affecterFoyer(nameF, idUniv).subscribe(
//     () => {
//       console.log('Foyer affecté avec succès à l\'université !');
//     },
//     (error) => {
//       console.error('Erreur lors de l\'affectation du foyer à l\'université : ', error);
//     }
//   );
 
//   }
}
