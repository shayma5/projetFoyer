import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/Service/university/university.service';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-university-cart',
  templateUrl: './university-cart.component.html',
  styleUrls: ['./university-cart.component.css']
})
export class UniversityCartComponent {
  universites: University[]=[];
  constructor(private universityService: UniversityService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadUniversities();
  }

  loadUniversities(): void {
    this.universityService.getAll().subscribe(data => 
      this.universites = data

      
    );
    }
    getFoyerLink(university: University): any[] {
      // Save the selected university
      this.universityService.setSelectedUniversity(university);
    
      // Return the router link
      return ['foyer', university.foyers?.idFoyer];
    }
    
}
