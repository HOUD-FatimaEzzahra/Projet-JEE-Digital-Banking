import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";

const routes: Routes = [
  { path :"customers", component : CustomersComponent},
  { path :"accounts", component : AccountsComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Redirige vers '/auth' pour la route par défaut
  { path :"new-customer", component : NewCustomerComponent},
  { path :"home", component : HomeComponent},
  { path :"auth", component : AuthComponent},
  { path: 'update-customer/:id', component: UpdateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
