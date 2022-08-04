import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { marvelHash, marvelPublicKey } from '../app.config';

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addApikeyToken(request);
    return next.handle(request);
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
