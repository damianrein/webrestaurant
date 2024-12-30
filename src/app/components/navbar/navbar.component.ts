import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

  isReservationModalOpen = false;

  openReservationModal() {
    this.isReservationModalOpen = true;
  }

  closeReservationModal() {
    this.isReservationModalOpen = false;
  }
}
