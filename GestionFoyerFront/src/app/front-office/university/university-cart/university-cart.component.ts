import { Component } from '@angular/core';
import { UniversityService } from 'src/app/Service/university/university.service';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-university-cart',
  templateUrl: './university-cart.component.html',
  styleUrls: ['./university-cart.component.css']
})
export class UniversityCartComponent {
  universites: University[]=[];
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.loadUniversities();
  }
  loadUniversities(): void {
    this.universityService.getAll().subscribe(data => 
      this.universites = data

      
    );
    }

}
