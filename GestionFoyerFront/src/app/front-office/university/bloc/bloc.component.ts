import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/Service/bloc/bloc-service.service';
import { Bloc } from 'src/app/models/Bloc';
import { Chambre } from 'src/app/models/Chambre';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent {
  //foyerId: number = 1;
  blocs: Bloc[]=[];
  constructor(private blocService: BlocService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchBlocks();
  }
  foyerId =+ this.route.snapshot.paramMap.get('param')!;
  fetchBlocks(): void {
    
    this.blocService.getBlocksByFoyer(this.foyerId)
      .subscribe((data: any) => {
        this.blocs = data;
      });
  }
 
}
