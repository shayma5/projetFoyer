import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/Service/university/university.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { University } from 'src/app/models/university';
@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  universityForm!: FormGroup;  // Formulaire réactif pour la mise à jour de l'université
  university!: University;  //Objet pour stocker les détails de l'université en cours de mise à jour

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private Router:Router
  ) {}

  ngOnInit(): void {
    this.createForm(); // Initialisation du formulaire réactif

    const universityId =+ this.route.snapshot.paramMap.get('param')!;
    this.universityService.get(universityId).subscribe((result) => {
      this.university = result;// Stockage des détails de l'université dans la variable du composant
      this.populateForm();// Pré-remplissage du formulaire avec les détails de l'université
    });
  }

  createForm(): void {
    this.universityForm = this.formBuilder.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
      
    });
  }

  populateForm(): void {
    this.universityForm.setValue({
      nomUniversite: this.university.nomUniversite,
      adresse: this.university.adresse,
    
    });
  }
  
  updateUniversity(): void {
    if (this.universityForm.valid) {
      // Création d'un objet mis à jour avec les valeurs du formulaire
      const updatedUniversity: University = {
        ...this.university,// Copie des propriétés existantes de l'université
        nomUniversite: this.universityForm.value.nomUniversite,
        adresse: this.universityForm.value.adresse,
        
        
      };
      
      this.universityService.update(this.university.idUniversite,updatedUniversity).subscribe(() => {
        alert('Mise à jour réussie !');
        this.Router.navigate(['/back/univesite']);
        // Redirigez l'utilisateur vers la page de détails ou une autre page de votre choix
      });
    }
  }

}
