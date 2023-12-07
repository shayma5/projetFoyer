import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/Service/university/university.service';

@Component({
  selector: 'app-desaffecter-foyer',
  templateUrl: './desaffecter-foyer.component.html',
  styleUrls: ['./desaffecter-foyer.component.css']
})
export class DesaffecterFoyerComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private universityService: UniversityService
  ) {}
  desaffecterFoyer(): void {
    const universityId = +this.route.snapshot.paramMap.get('param')!;
    
    this.universityService.desaffecterFoyerAUniversite(universityId).subscribe(
      () => {
        this.router.navigate(['/back/univesite']); // Redirigez l'utilisateur vers la liste des universités ou une autre page de votre choix
      }
    );

}
}
