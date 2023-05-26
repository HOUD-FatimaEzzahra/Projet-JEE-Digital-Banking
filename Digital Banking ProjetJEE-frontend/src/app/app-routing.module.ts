import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {ProfileComponent} from "./profile/profile.component";
import {OpperationComponent} from "./opperation/opperation.component";

const routes: Routes = [
  { path :"customers", component : CustomersComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Redirige vers '/auth' pour la route par défaut
  { path :"new-customer", component : NewCustomerComponent},
  { path :"home", component : HomeComponent},
  { path :"auth", component : AuthComponent},
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path :"profile", component : ProfileComponent},
  { path :"operations", component : OpperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
