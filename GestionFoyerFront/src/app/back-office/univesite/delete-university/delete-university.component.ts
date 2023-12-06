import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/Service/university/university.service';

@Component({
  selector: 'app-delete-university',
  templateUrl: './delete-university.component.html',
  styleUrls: ['./delete-university.component.css']
})
export class DeleteUniversityComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private universityService: UniversityService
  ) {}
  deleteUniversity(): void {
    const universityId = +this.route.snapshot.paramMap.get('id')!;
    
    this.universityService.delete(universityId).subscribe(
      () => {
        alert('Université supprimée avec succès !');
        this.router.navigate(['/back/univesite']); // Redirigez l'utilisateur vers la liste des universités ou une autre page de votre choix
      },
      (error) => {
        console.error('Erreur lors de la suppression : ', error);
        // Gérez l'erreur de manière appropriée, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }

}
