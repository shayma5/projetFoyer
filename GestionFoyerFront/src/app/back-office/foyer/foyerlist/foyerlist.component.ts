import { Component,OnInit } from '@angular/core';
import { FoyerService } from 'src/app/Service/foyer/foyer.service';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-foyerlist',
  templateUrl: './foyerlist.component.html',
  styleUrls: ['./foyerlist.component.css']
})
export class FoyerlistComponent implements OnInit  {
  foyers!: Foyer[];
  constructor(private foyerService: FoyerService) { }

  ngOnInit(): void {
    this.loadFoyers();
  }
  loadFoyers(): void {
    this.foyerService.getAll().subscribe(data => 
      this.foyers = data
    );
  }

}
