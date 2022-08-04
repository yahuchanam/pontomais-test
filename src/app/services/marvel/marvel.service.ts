import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { apiPageSize, marvelAPI } from 'src/app/app.config';
import { MarvelEndpoint } from 'src/app/enums/endpoint.enum';
import { MarvelHeroResponse, MarvelListRequest } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  cache = new Map<string, MarvelHeroResponse | null>;

  constructor(private http: HttpClient) {}

  search(payloadRequest: MarvelListRequest): Observable<MarvelHeroResponse> {

    const uri = `${marvelAPI}/${MarvelEndpoint.characters}`;
    const params = payloadRequest.toParams();
    const cacheKey = uri + params.toString();

    if(this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey) as MarvelHeroResponse);
    }

    return this.http.get<MarvelHeroResponse>(
      uri, { params }
    ).pipe(
      map(response => {
        this.cache.set(cacheKey, response);
        response.data.pages = Math.floor(response.data.total / apiPageSize);
        if(response.data.results.length === 0) {
          response.data.pages = 0;
        }
        return response;
      })
    );
  }
}
