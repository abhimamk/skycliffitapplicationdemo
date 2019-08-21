import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';


export class Interceptors implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler)
{
  const HttpReq=req.clone({
    headers: new HttpHeaders().set('Content-Type','application/json')
  });
  console.log(Headers);
  return next.handle(HttpReq);
}
}

