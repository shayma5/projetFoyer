import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreServiceService {
  private selectedChambre: Chambre| null = null;
  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]>('http://localhost:9090/chambre/chambres');
  }

  addChambre(chambre: any) {
    return this.httpClient.post('http://localhost:9090/chambre/new/bloc', chambre)
  }

  getBlocNames(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:9090/chambre/blocnames');
  }

  deleteChambre(id: any) {
    return this.httpClient.delete('http://localhost:9090/chambre/delete/' + id);
  }

  editChambre(id: any, chambre: any): Observable<any> {
    return this.httpClient.put('http://localhost:9090/chambre/update/' + id, chambre);
  }

  getChambre(id: any) {
    return this.httpClient.get('http://localhost:9090/chambre/getId/' + id);
  }

  getChambrewithbloc(id: any) {
    return this.httpClient.get('http://localhost:9090/chambre/bloc/' + id);
  }
  setSelectedChambre(chambre: Chambre): void {
    this.selectedChambre = chambre;
  }
  
  getSelectedChambre(): Chambre | null {
    return this.selectedChambre;
  }
  
}
