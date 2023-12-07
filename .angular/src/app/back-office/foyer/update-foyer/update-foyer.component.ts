import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  FoyerForm!:FormGroup;
  foyer !:Foyer;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private foyerService: FoyerService,
    private Router:Router){}
  ngOnInit(): void {
    this.createForm();
      const idFoyer =+  this.route.snapshot.paramMap.get('param')!;
      this.foyerService.get(idFoyer).subscribe((result)=>{this.foyer=result;
        this.populateForm();

      })
     }
     createForm(): void {
      this.FoyerForm=this.formBuilder.group({
        nomfoyer: ['', Validators.required],
        capacitefoyer: ['', Validators.required],
      })
    }
    populateForm():void{
      this.FoyerForm.setValue({
        nomfoyer: this.foyer.nomFoyer,
        capacitefoyer: this.foyer.capaciteFoyer,
      
      });
    }
    updateFoyer(): void {
      if (this.FoyerForm.valid) {
        // Création d'un objet mis à jour avec les valeurs du formulaire
        const updatedFoyer: Foyer = {
          ...this.foyer,// Copie des propriétés existantes de l'université
          nomFoyer: this.FoyerForm.value.nomfoyer,
          capaciteFoyer: this.FoyerForm.value.capacitefoyer,
          
        };
  
        this.foyerService.update(this.foyer.idFoyer,updatedFoyer).subscribe(() => {
          alert('Mise à jour réussie !');
          
          this.Router.navigate(['/back/foyer']);
          // Redirigez l'utilisateur vers la page de détails ou une autre page de votre choix
        });
      }
    }
  
     



}
