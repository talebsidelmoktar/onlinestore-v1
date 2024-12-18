import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService,
              private router:Router
  ) { }
  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers();
  }
  onCustomerDeleted(id: number) {
    this.customers = this.customers.filter(Customer => Customer.id !== id);
  } 
  onAddCustomer(){
   this.router.navigateByUrl("/customers/add")
  }
}
