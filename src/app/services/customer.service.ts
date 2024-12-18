import { Injectable } from "@angular/core";
import { Customer } from "../shared/customer";
import { Customers } from "../shared/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private Customers: Customer[] = [
        { id: 1, name: 'Demo1', tel: +21622345678, email: 'demo1@example.com' },
        { id: 2, name: 'Demo2', tel: +21698654321, email: 'demo2@example.com' },
        { id: 3, name: 'Deom3', tel: +21650887766, email: 'demo3@example.com' },
        { id: 4, name: 'Demo4', tel: +21621556677, email: 'demo4@example.com' },
      ];

constructor() { }

  getAllCustomers():Customer[]{
    return this.Customers;
  }
  
      //Méthode pour supprimer un produit de la liste des produits
   deleteCustomerById(id: number): void {
    const index = this.Customers.findIndex(Customer => Customer.id == id)
    if (index !== -1) {
      this.Customers.splice(index, 1);
    }
  } 
    //Méthode pour ajouter un nouveu produit
   addCustomer(Customer: Customer) {
    Customer.id = this.Customers[this.Customers.length - 1].id + 1;
    this.Customers.push(Customer);
  } 
}