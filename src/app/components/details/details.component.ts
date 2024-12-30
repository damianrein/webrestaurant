import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/data/plato';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  plato?:Plato;
  
  constructor() { }

  ngOnInit(): void {
  }

}
