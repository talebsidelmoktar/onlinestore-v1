import { Component } from '@angular/core';
import { Customer } from '../shared/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer =new Customer(-1,"",0,"")
    constructor(private customerService: CustomerService,
                private router: Router) { }
    onSubmit() {
      this.customerService.addCustomer(this.customer);
      this.router.navigateByUrl("/customers");
    }

}
