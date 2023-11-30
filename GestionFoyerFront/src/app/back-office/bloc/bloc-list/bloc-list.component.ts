import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/Service/bloc/bloc-service.service';


@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent {

bloc: any ;

constructor(private es: BlocService,private ac:ActivatedRoute,private router:Router){};

ngOnInit(): void {
  this.es.getAllData().subscribe((response) => {this.bloc = response})

  this.es.deleteBloc(this.ac.snapshot.params['idBloc']).subscribe(
    ()=>
      this.router.navigate(['back/bloc/bloclist'])
  )
}

delete(id:any)
{
 this.es.deleteBloc(id).subscribe(()=>{
    // this.es.getAllData().subscribe((response) => {this.etudiants = response})
   this.bloc= this.bloc.filter((bloc:any)=>bloc.idBloc!=id)
 },error =>{
   console.log(error);
 });
}

}