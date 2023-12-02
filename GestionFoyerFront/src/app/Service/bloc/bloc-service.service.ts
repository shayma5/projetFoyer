import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from 'src/app/models/Bloc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private  httpClient:HttpClient) { }

  getAllData(): Observable<Bloc[]> {
    return this.httpClient.get<Bloc[]> ('http://localhost:3031/bloc/blocs');
  }

  addBloc(bloc: any) {
    return this.httpClient.post('http://localhost:3031/bloc/foyers/addBloc', bloc);
  }

  deleteBloc(id:any) {
    return this.httpClient.delete('http://localhost:3031/bloc/delete/'+id);
  }

  getBloc(id:any) {
    return this.httpClient.get('http://localhost:3031/bloc/getId/'+id);
  }

  editBloc(id: any,bloc:any): Observable<any> {
    return this.httpClient.put('http://localhost:3031/bloc/update/'+id, bloc);
  }

  getFoyerNames(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3031/bloc/foyernames');
  }

}