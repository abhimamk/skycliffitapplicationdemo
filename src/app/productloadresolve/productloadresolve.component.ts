import { Product } from '../productdisplay/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productloadresolve',
  templateUrl: './productloadresolve.component.html',
  styleUrls: ['./productloadresolve.component.css']
})
export class ProductloadresolveComponent implements OnInit {
  arr:Product[]=[];
  productData:any;
  errormsg:string;
  constructor(private _actroute:ActivatedRoute) {
    this.productData=this._actroute.snapshot.data["p_data"];
    console.log(this.productData);
   }

  ngOnInit() {
    this.arr=this.productData.data;
    this.errormsg=this.productData.errormsg;
  }

}
