import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from "@angular/forms";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customer=this.fb.group({
      FirstName:new FormControl(null),
      LastName:new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.customer);
  }

}
