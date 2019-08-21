import { Routes,RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdisplayComponent } from './userdisplay.component';

const arr : Routes=[
{path:'signup',component:SignupComponent},
{path:'edituser/:user_email',component:EdituserComponent},
{path:'users',component:UserdisplayComponent},
];
export const userrouting=RouterModule.forChild(arr);
