import { map, catchError } from 'rxjs/operators';
import { ProductdataService } from './productdisplay/productdata.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { productResolved } from './productdisplay/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResloveService implements Resolve<productResolved> {


  constructor(private _productdata:ProductdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({data:x,errormsg:''})),
      catchError(error=>{return of({product:null,errormsg:error.message});
    })
    );
  }
}
