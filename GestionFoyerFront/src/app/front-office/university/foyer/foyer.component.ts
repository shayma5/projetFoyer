import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit {
  foyers!: Foyer;
  constructor(
   
    private route: ActivatedRoute,
    private FoyerService: FoyerService,
    
  ) {}
  ngOnInit(): void {
    

    const IdFoyer =+ this.route.snapshot.paramMap.get('param')!;
    this.FoyerService.get(IdFoyer).subscribe((result) => {
      this.foyers = result;
    });
  }
  getBlocLink(foyer: Foyer): any[] {
    // Save the selected university
    this.FoyerService.setSelectedFoyer(foyer);
  
    // Return the router link
    return ['bloc'];
  }
  
}
