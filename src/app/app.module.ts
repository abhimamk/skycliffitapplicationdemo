import { CustomerModule } from './customer/customer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { TasksidebarComponent } from './tasksidebar/tasksidebar.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptors } from './interceptors';
import { ProductloadresolveComponent } from './productloadresolve/productloadresolve.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './userdisplay/user.module';
import { AppProductPreloader } from './appproductpreloader';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    TaskproductComponent,
    EdittaskComponent,
    AddTaskComponent,
    TasksidebarComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    ProductloadresolveComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    CustomerModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:Interceptors,multi:true}, AppProductPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
