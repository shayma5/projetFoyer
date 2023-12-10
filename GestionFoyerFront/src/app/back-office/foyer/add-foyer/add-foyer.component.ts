import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { UniversityService } from 'src/app/Service/university/university.service';
import { Foyer } from 'src/app/models/foyer';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent {
  constructor(private Router:Router, private foyerService: FoyerService,private universiteService : UniversityService ){}
  foyer: Foyer = new Foyer();
  foyers!:Foyer[];
  universites : University[] = [];
  idU:number=0;
  ngOnInit(){
    this.foyerService.getAll().subscribe(data => 
      this.foyers = data
    );
    this.universiteService.getAllDispo().subscribe(data => 
      this.universites = data
    );
  }
  add(F:NgForm){
    
    const univ =F.controls['idUniversite'].value;
    console.log(univ)
    this.universiteService.getId(univ).subscribe(data => 
      this.idU = data
    );
    console.log(this.idU)
    const foyer:Foyer={
     "idFoyer":this.foyers.length+1,
     "nomFoyer": F.controls['nomfoyer'].value,
     "capaciteFoyer": F.controls['capacitefoyer'].value,
     "idUniversite": this.idU
      }
 
    this.foyerService.create(foyer,foyer.idUniversite).subscribe(
        ()=>{alert('added seccesfully!!');
       this.Router.navigate(['/back/foyer']);})
   
 }

}
