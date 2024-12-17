import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() plato: any; // Recibe la información del plato como Input
  
  constructor() { }

  ngOnInit(): void {
  }

}
