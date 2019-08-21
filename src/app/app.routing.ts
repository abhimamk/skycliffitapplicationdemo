import { ProductloadresolveComponent } from './productloadresolve/productloadresolve.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { Routes,RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ProductResloveService } from './product-reslove.service';
import { HomeComponent } from './home/home.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product1',resolve:{p_data:ProductResloveService},component:ProductloadresolveComponent},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  {path:'login',component:LoginComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'addtask',component:AddTaskComponent},
  {path:'tasks',component:TaskproductComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'edituserreactive/:user_email',component:EdituserreactiveComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'},


];

export const routing=RouterModule.forRoot(arr);
