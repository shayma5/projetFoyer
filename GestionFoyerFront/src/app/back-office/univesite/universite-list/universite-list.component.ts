import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/Service/university/university.service';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit  {
  universities!: University[];
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.loadUniversities();
  }
  loadUniversities(): void {
    this.universityService.getAll().subscribe(data => 
      this.universities = data
      
    );
    
  }


  

}
