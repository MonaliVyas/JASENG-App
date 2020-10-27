import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            if (error.status == 400) {
                //do nothing
            } else {
                return throwError(error);
            }
        }))
    }
}
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class HttpErrorInterceptor implements HttpInterceptor{

//     constructor( private injector: Injector){}

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError((error: HttpErrorResponse)=>{
//             if(error.status == 400){
//                 //validation failed
//                 // return;
//             }else{
//                 return throwError(error);
//             }
//         } ))
//     }
// }
// //refresh token
// //if validation error -> return to form
// //any server error -> show alert and log