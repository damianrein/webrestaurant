import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoginVisible = true;

  showLogin() {
    this.isLoginVisible = true;
  }

  showRegister() {
    this.isLoginVisible = false;
  }
}
