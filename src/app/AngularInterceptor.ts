import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators'; 

@Injectable()
export class AngularInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req) .pipe(
        // timeout(3000),
        catchError(e => {
            console.log(e);
            return of(null)
        })
    );
  }
}