import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from 'src/app/models/university';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private selectedUniversity: University | null = null;
  URL="http://localhost:9090/universite";
  httpOPtions={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  getAll() : Observable<any> {
    return this.http.get<University[]>(this.URL);
  }

  get(id: number) {
    return this.http.get<University>(this.URL+'/'+id);
  }

  create(university: University): Observable<University>{
    return this.http.post<University>(this.URL,university,this.httpOPtions);
  }

  update(id: number, university: University): Observable<University> {
    return this.http.put<University>(this.URL+'/update2/'+id,university);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/'+id);
  }
  
  
  getId(name: string){
    return this.http.get<number>(this.URL+'/getIdParNom/'+name);
  }
  desaffecterFoyerAUniversite(id:number): Observable<University> {
    return this.http.put<University>(`http://localhost:9090/universite/desaffecterFoyerAUniv/${id}`, {});
  }
  getAllDispo() : Observable<any> {
    return this.http.get<University[]>(this.URL+'/getAllDispo');
  }
  
  setSelectedUniversity(university: University): void {
    this.selectedUniversity = university;
  }

  getSelectedUniversity(): University | null {
    return this.selectedUniversity;
  }
}
