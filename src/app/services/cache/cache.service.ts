import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService<T> {

  cache = new Map<string, T>;

  constructor() { }
}
