import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl, Validators, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer:FormGroup;
invalidName:string[]=['xyz','abc'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customer=this.fb.group({
      FirstName:new FormControl(null,[Validators.required,Validators.minLength(3),this.checkFirstName.bind(this)]),
      LastName:new FormControl(null,[Validators.required]),
      passwordgroup:new  FormGroup({
        password:new FormControl(null,Validators.required),
        con_password:new FormControl(null,Validators.required)
      },this.matchPassword.bind(this)),
      email:new FormControl(),
      mobile_num:new FormControl(),
      notification:new FormControl('text'),
      hobby:new FormArray([])
    });

    this.customer.get('notification').valueChanges.subscribe(
      (x)=>{
        let email=this.customer.get('email');
        let mobile_num=this.customer.get('mobile_num');
        if(x=="email"){
          email.setValidators(Validators.required);
          mobile_num.clearValidators();
        }
        else{
          email.clearValidators();
          mobile_num.setValidators(Validators.required);
        }
        email.updateValueAndValidity();
        mobile_num.updateValueAndValidity();
      }
    );
  }
  getControls() {
    return (<FormArray>this.customer.get('hobby')).controls;
 }

  checkFirstName(x:AbstractControl):{[y:string]:boolean}
  {
    let value=x.value;
    if(this.invalidName.indexOf(value)!==-1)
    {
      return {'invadlidname':true};
    }
    return null;
  }
  matchPassword(x:AbstractControl):{[y:string]:boolean}
  {
    let pass=x.get('password').value;
    let conpass=x.get('con_password').value;
    if(pass!=conpass)
    {
      return{'passwordNotMatched':true};
    }
    return null;
  }

  onSubmit(){
    console.log(this.customer);
  }

  onAddHobbyClicked(){
    let control=new FormControl(null,Validators.required);
   (<FormArray> this.customer.get('hobby')).push(control);
  }
  onDeleteHobbyClicked(i){
    (<FormArray> this.customer.get('hobby')).removeAt(i);
  }


}
