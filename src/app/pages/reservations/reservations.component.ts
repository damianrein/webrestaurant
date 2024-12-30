import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('reservationDialog') reservationDialog!: ElementRef;

  openReservationForm() {
    this.reservationDialog.nativeElement.showModal(); // Abre el dialog
  }

  closeReservationForm() {
    this.reservationDialog.nativeElement.close(); // Cierra el dialog
  }
}
