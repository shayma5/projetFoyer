import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';

@Component({
  selector: 'app-dalete-foyer',
  templateUrl: './dalete-foyer.component.html',
  styleUrls: ['./dalete-foyer.component.css']
})
export class DaleteFoyerComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foyerService: FoyerService
  ) {}
  deleteFoyer(): void {
    const FoyerId = +this.route.snapshot.paramMap.get('id')!;
    
    this.foyerService.delete(FoyerId).subscribe(
      () => {
        alert('Foyer supprimée avec succès !');
        this.router.navigate(['/back/foyer']); // Redirigez l'utilisateur vers la liste des universités ou une autre page de votre choix
      },
      (error) => {
        console.error('Erreur lors de la suppression : ', error);
        // Gérez l'erreur de manière appropriée, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );

}
}
