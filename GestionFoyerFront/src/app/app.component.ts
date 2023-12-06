import { Component } from '@angular/core';
import { UniversityService } from './Service/university/university.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UniversityService]
})
export class AppComponent {
  title = 'GestionFoyerFrontOffice';
}
