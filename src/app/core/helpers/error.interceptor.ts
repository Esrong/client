// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { AuthenticationService } from '../services/auth.service';
// import { AccountService } from '../services/account.service';
// import { BirthService } from '../services/birth.service';

 

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     constructor(private birthService:BirthService,private accountService: AccountService,private authenticationService: AuthenticationService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError(err => {
//            //for fire
//             if (err.status === 401) {
//                 // auto logout if 401 response returned from api
//                 this.authenticationService.logout();
//                 location.reload();
//             }
            
//             //for mongo

//             if ([401, 403].includes(err.status) && this.accountService.accountValue) {
//                 // auto logout if 401 or 403 response returned from api
//                 this.accountService.logout();
//             }
//             if([400].includes(err.status)&& this.birthService.search){
//                 this.birthService;
//             }


//             const error = err.error.message || err.statusText;
//             return throwError(error);
//         }));
        
//     }      
    
// }

// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// HTTP
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

// Services
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof ProgressEvent) {
            // A client-side or network error occurred
            this.toastr.error('Network Error!');
          } else {
            // The backend returned an unsuccessful response code
            this.toastr.error(err.error.message, `${err.status.toString()} - ${err.statusText}`);
            if (err.error.errors) {
              for (const e in err.error.errors) {
                if (err.error.errors.hasOwnProperty(e)) {
                  this.toastr.error(err.error.errors[e]);
                }
              }
            }
          }

          return throwError(err.error);
        }));
  }
}
