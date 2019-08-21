import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdisplayComponent } from './productdisplay.component';
import { RouterModule, Routes } from '@angular/router';

const arr : Routes=[
  {path:'', children:[
    {path:'',component:ProductdisplayComponent},
    {path:'addproduct',  component:ProductaddComponent},
    {path:'editproduct/:pro_id',component:EditproductComponent}
  ]},


];
export const prodcutrouting=RouterModule.forChild(arr);
