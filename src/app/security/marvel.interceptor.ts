import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { PreloaderService } from '../services/preloader/preloader.service';
import { marvelHash, marvelPublicKey } from '../app.config';

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  constructor(private preloaderService: PreloaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addApikeyToken(request);
    this.preloaderService.show();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.preloaderService.hide();
        return throwError(() => error);
      }),
      finalize(() => {
        this.preloaderService.hide();
      })
    );
  }

  private addApikeyToken(request: HttpRequest<any>): HttpRequest<any> {
    const params = request.params
      .set('apikey', marvelPublicKey)
      .set('ts', 1)
      .set('hash', marvelHash);
    return request.clone({
      params,
    });
  }
}
