import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { marvelAPI } from 'src/app/app.config';
import { MarvelEndpoint } from 'src/app/enums/endpoint.enum';
import { MarvelHeroResponse } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  cache = new Map<string, MarvelHeroResponse | null>;

  constructor(private http: HttpClient) {}

  search(term?: string): Observable<MarvelHeroResponse> {

    return this.http.get<MarvelHeroResponse>('assets/mock.json');

    const uri = `${marvelAPI}/${MarvelEndpoint.characters}`;

    if(this.cache.has(uri)) {
      return of(this.cache.get(uri) as MarvelHeroResponse);
    }

    return this.http.get<MarvelHeroResponse>(
      uri, { observe: 'response' }
    ).pipe(
      map(result => {
        this.cache.set(uri, result?.body)
        return result.body as MarvelHeroResponse
      })
    );
  }
}
