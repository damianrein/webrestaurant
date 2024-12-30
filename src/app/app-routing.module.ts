import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:FormsComponent},
  {path:'reservation', component:ReservationsComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
