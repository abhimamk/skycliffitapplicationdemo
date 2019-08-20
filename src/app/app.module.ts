import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { TasksidebarComponent } from './tasksidebar/tasksidebar.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptors } from './interceptors';
@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent,
    MenuComponent,
    PagenotfoundComponent,
    SidebarComponent,
    ProductaddComponent,
    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
    EditproductComponent,
    TaskproductComponent,
    EdittaskComponent,
    AddTaskComponent,
    TasksidebarComponent,
    CustomerComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:Interceptors,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
