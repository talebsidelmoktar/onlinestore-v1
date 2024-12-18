import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

    @Input() customer!: Customer;
    @Output() customerDeleted: EventEmitter<number> = new EventEmitter<number>();
    constructor(private customerService:CustomerService){
  
    }
  
  
    deleteCustomer(id: number) {
      this.customerService.deleteCustomerById(id)
      this.customerDeleted.emit(id);
        
    }

}
