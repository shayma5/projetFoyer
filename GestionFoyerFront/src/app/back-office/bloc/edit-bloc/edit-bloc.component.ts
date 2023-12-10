import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/Service/bloc/bloc-service.service';
import { Bloc } from 'src/app/models/Bloc';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent {
  idBloc!:Number;
  bloc!:Bloc;
  updateForm!:FormGroup;
  foyerNames: string[] = [];
  

  constructor(private formBuilder: FormBuilder, private actRoute:ActivatedRoute,private es: BlocService, private router: Router) { }
  ngOnInit(): void {
    this.getParam();
    this.fetchFoyerNames();
    this.es.getBloc(this.idBloc).subscribe((data)=>{
      this.bloc=data
      console.log(this.bloc.nomFoyer);
      this.updateForm=new FormGroup({
        idBloc:new FormControl(this.bloc.idBloc),
        nomFoyer:new FormControl(this.bloc.nomFoyer),
        nomBloc:new FormControl(this.bloc.nomBloc),
        capaciteBloc:new FormControl(this.bloc.capaciteBloc)
      });
      
    });
  }

  update(){
      const updatedData = this.updateForm.value;
      console.log(updatedData);
      this.es.editBloc(this.idBloc,updatedData).subscribe(
        ()=>this.router.navigate(['back/bloc/bloclist'])
      );
  }

  fetchFoyerNames() {
    this.es.getFoyerNames().subscribe(
      names => {
        this.foyerNames = names;
      },
      error => {
        console.error('Error fetching foyer names:', error);
      }
    );
  }


  getParam(){
    //this.id= Number( this.actR.snapshot.paramMap.get('param'));
    this.actRoute.paramMap.subscribe(data => this.idBloc=Number(data.get('param')));
   }

}
