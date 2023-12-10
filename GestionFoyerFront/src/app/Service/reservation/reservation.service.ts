import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly URL = 'http://localhost:9090/reservation';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.URL);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }

  getNom(): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL}/nom`);
  }

  getId(name: string): Observable<number> {
    return this.http.get<number>(`${this.URL}/getIdParNom/${name}`);
  }

  getReservationsForCurrentUser(): Observable<Reservation[]> {
    const userString = localStorage.getItem('user');
    const cin = userString ? JSON.parse(userString).cin : null;
    
    if (!cin) {
      console.warn('User information or cin not available in localStorage');
      return new Observable<Reservation[]>(observer => observer.next([]));
    }
    
    return this.http.get<Reservation[]>(`${this.URL}/${cin}`);
  }
  

  addReservation(idChambre: number, cinEtudiant: number): Observable<Reservation> {
    
    return this.http.put<Reservation>(
      `${this.URL}/adduniversitychambrebloc/${idChambre}/${cinEtudiant}`,
      null,
      this.httpOptions
    );
  }

  annulerReservation(cin: number): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.URL}/annulerReservation/${cin}`,
      null,
      this.httpOptions
    );
  }
}