import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from 'src/app/models/foyer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private selectedFoyer: Foyer | null = null;
  URL="http://localhost:9090/foyer";
  httpOPtions={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  getAll() : Observable<any> {
    return this.http.get<Foyer[]>(this.URL);
  }

  get(id: number) {
    return this.http.get<Foyer>(this.URL+'/'+id);
  }

  create(foyer: Foyer,idUniversite:number){
    return this.http.post(this.URL+`/ajouterFoyerAffecterAUniv/${idUniversite}`,foyer,this.httpOPtions);
  }

  update(id: number, foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(this.URL+'/update2/'+id,foyer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/'+id);
  }
  getNom(): Observable<string[]>{
    return this.http.get<string[]>(this.URL+'/nom');
  }
  getId(name: string){
    return this.http.get<number>(this.URL+'/getIdParNom/'+name);
  }
  setSelectedFoyer(foyer: Foyer): void {
    this.selectedFoyer = foyer;
  }
  
  getSelectedFoyer(): Foyer | null {
    return this.selectedFoyer;
  }
  
}
