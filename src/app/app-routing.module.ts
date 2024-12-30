import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:FormsComponent},
  {path:'reservation', component:ReservationFormComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
