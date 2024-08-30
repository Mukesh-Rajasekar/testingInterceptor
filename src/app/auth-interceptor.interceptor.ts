import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

// export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
//   const token = localStorage.getItem('token');
//   console.log(token);
//   const cloneReq = req.clone({
//     setHeaders:{
//       Authorization:`Bearer ${token}`
//     }
//   });
//   return next(req);
// };
@Injectable()
export class authInterceptorInterceptor implements HttpInterceptor {
  
  constructor(private logins: LoginService) { 
  }  // DI

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      
      // const authToken = this.logins.getToken(); // T
     
      // req = req.clone({
      //     setHeaders: {
      //         Authorization: "Bearer " + authToken
      //     }
      // });
      return next.handle(req);
  }
}