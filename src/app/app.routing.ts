import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { Component } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';

const arr : Routes=[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'customer',canActivate:[UserGuardService], component:CustomerComponent},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'login',component:LoginComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'addtask',component:AddTaskComponent},
  {path:'tasks',component:TaskproductComponent},
  {path:'signup',component:SignupComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'edituserreactive/:user_email',component:EdituserreactiveComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'},


];

export const routing=RouterModule.forRoot(arr);
