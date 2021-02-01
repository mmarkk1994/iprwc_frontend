import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../user/user.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public userService: UserService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userService.isUserPresent()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.currentUser.authToken}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          localStorage.removeItem('user');
          this.userService.currentUser = null;
          this.router.navigate(['/login']);
        }
        throw err;
      })
    );
  }
}
