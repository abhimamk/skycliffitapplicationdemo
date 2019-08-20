import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


export class Interceptors implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler)
{
  const HttpReq=req.clone({
    headers:req.headers.set('Content-Type','application/json')
  });
  return next.handle(HttpReq);
}
}

