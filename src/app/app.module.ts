import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BtnWhatsappComponent } from './components/btn-whatsapp/btn-whatsapp.component';
import { HeadComponent } from './components/head/head.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BtnWhatsappComponent,
    HeadComponent,
    CardComponent,
    CardContainerComponent,
    FormsComponent,
    ReservationFormComponent,
    ReservationsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
