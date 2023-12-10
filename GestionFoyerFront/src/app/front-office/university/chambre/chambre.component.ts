import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ChambreServiceService } from 'src/app/Service/chambre/chambre-service.service';
import { Chambre } from 'src/app/models/Chambre';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent {

  chambres: Chambre[]=[];
  constructor(
    private route: ActivatedRoute,
    private chambreService: ChambreServiceService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    const Idbloc =+ this.route.snapshot.paramMap.get('id')!;
    this.fetchChambres();
    }
    Idbloc =+ this.route.snapshot.paramMap.get('id')!;
    fetchChambres(): void {
    console.log(this.Idbloc);
    
      this.chambreService.getChambrewithbloc(this.Idbloc)
        .subscribe((data: any) => {
          this.chambres = data;
        });
    }

    navigateToAddReservation(chambre: Chambre) {
      this.chambreService.setSelectedChambre(chambre);
      this.router.navigate(['front/universities/addreservation']);
    }

  isLoggedIn(): boolean {
    const userString = localStorage.getItem('user');
    return !!userString;
  }
}
