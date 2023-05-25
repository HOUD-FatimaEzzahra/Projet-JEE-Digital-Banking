import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from "../services/customer.service";
import { Customer } from "../model/customer.model";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  isDisabled: boolean = true;
  updateCustomerFormGroup: FormGroup;
  customerId!: number; // Add '!' to indicate that it will be initialized

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  )  {
    this.updateCustomerFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = Number(params['id']); // Convert the parameter to a number
      this.loadCustomer(this.customerId);
    });
  }

  loadCustomer(customerId: number): void {
    this.customerService.getCustomerById(customerId).subscribe(
      (response: any) => {
        const customer: Customer = {
          id: response.id,
          name: response.name,
          email: response.email
        };
        this.updateCustomerFormGroup.patchValue(customer);
      },
      error => {
        console.error('Failed to load customer', error);
      }
    );
  }



  handleUpdateCustomer(): void {
    if (this.updateCustomerFormGroup.valid) {
      const updatedCustomer: Customer = {
        id: this.updateCustomerFormGroup.value.id,
        name: this.updateCustomerFormGroup.value.name,
        email: this.updateCustomerFormGroup.value.email
      };

      this.customerService.updateCustomer(updatedCustomer).subscribe(
        response => {
          alert("Customer updated successfully !");
          this.router.navigateByUrl("/customers");
        },
        error => {
          alert("Failed to update customer!");
          console.error('Failed to update customer', error);
        }
      );
    }
  }



 /* handleUpdateCustomer(): void {
    if (this.updateCustomerFormGroup.valid) {
      const updatedCustomer: Customer = {
        id: this.updateCustomerFormGroup.value.id,
        name: this.updateCustomerFormGroup.value.name,
        email: this.updateCustomerFormGroup.value.email
      };

      this.customerService.updateCustomer(updatedCustomer).subscribe(
        response => {
          console.log('Customer updated successfully', response);
          // Rediriger vers une autre page ou effectuer une autre action après la mise à jour réussie
        },
        error => {
          console.error('Failed to update customer', error);
        }
      );
    }
  }*/
}
