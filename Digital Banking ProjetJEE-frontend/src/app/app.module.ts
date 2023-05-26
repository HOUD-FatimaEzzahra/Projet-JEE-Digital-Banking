import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ProfileComponent } from './profile/profile.component';
import { OpperationComponent } from './opperation/opperation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    HomeComponent,
    AuthComponent,
    UpdateCustomerComponent,
    ProfileComponent,
    OpperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
