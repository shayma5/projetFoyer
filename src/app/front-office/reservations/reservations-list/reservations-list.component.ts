import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent {
  reservation: any[] = [];

  constructor(
    
    private http: HttpClient,
    
  ) { }


  ngOnInit(): void {
    this.fetchReservations();

  }


  fetchReservations() {
      this.http.get<any[]>('http://localhost:9090/reservation/getAll')
      .subscribe((data) => {
        this.reservation = data;
      });
  }

  isCurrentYear(dateString: string): boolean {
    const yearFromDatabase = new Date(dateString).getFullYear();
    const currentYear = new Date().getFullYear();
    return yearFromDatabase === currentYear;
  }

}