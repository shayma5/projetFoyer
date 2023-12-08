import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
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

}
