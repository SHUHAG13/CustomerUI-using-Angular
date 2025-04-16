import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  imports: [FormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent {

  // baseurl="https://localhost:7107/api/Customer";
  // http=inject(HttpClient);
  // customerList:any[]=[];
  // router = inject(Router);
  // customerObj:any={
  //   cstId:0,
  //   cstName:"",
  //   cstAge:0,
  //   cstEmail:"",
  //   cstAddress:""
  // }
  // getAllCustomers(){
  //   this.http.get(this.baseurl).subscribe((response:any)=>{
  //     this.customerList=response;
  //   });
  // }
  // onSaveCustomer(){
  //   this.http.post(this.baseurl,this.customerObj).subscribe((response:any)=>{
  //     if(response){
  //       alert("Customer Added Successfully");
  //       this.getAllCustomers();
  //       this.router.navigate(['/home']);
  //     }else{
  //       alert("Unable to add customer");
  //     }
  //   })

  //}
  // onEdit(id:number){
  //   this.http.get(this.baseurl+"/"+id).subscribe((response:any)=>{
  //     this.customerObj=response;
  //     this.router.navigate(['/new-customer']);
  //   }
  //   );
  // }
  // onUpdate(){
  //   this.http.put(this.baseurl,this.customerObj).subscribe((response:any)=>{
  //     alert("Customer updated successfully!");
  //     this.getAllCustomers();
  //     this.router.navigate(['/home']);
  //   });
  // }

}
