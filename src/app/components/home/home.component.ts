import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NgFor,RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customerList:any[]=[];
  http=inject(HttpClient);
  router = inject(Router);
  baseurl="https://localhost:7107/api/Customer";

  customerObj:any={
    cstId:0,
    cstName:"",
    cstAge:0,
    cstEmail:"",
    cstAddress:""
  };

  getAllCustomers(){
    this.http.get(this.baseurl).subscribe((response:any)=>{
      this.customerList=response;
    });
  }

  constructor(){
    this.getAllCustomers();
  }

  onSaveCustomer(){
    this.http.post(this.baseurl,this.customerObj).subscribe((response:any)=>{
      if(response){
        alert("Customer Added Successfully");
        this.getAllCustomers();
       
      }else{
        alert("Unable to add customer");
      }
    })

  }

onEdit(customer:any){
  this.customerObj=customer;

}

onDelete(id:number){
  if(confirm("Are you sure you want to delete this customer?")){
    this.http.delete(this.baseurl+"/"+id).subscribe((response:any)=>{
      alert("Customer deleted successfully!");
      this.getAllCustomers();
    });
  }
}
onUpdate(){
  this.http.put(this.baseurl,this.customerObj).subscribe((response:any)=>{
    alert("Customer updated successfully!");
    this.getAllCustomers();
    this.router.navigate(['/home']);
  });
}


}
