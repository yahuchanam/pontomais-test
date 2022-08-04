import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';
import { apiPageSize, marvelAPI } from 'src/app/app.config';
import { MarvelEndpoint } from 'src/app/enums/endpoint.enum';
import {
  MarvelComics,
  MarvelEvents,
  MarvelHero,
  MarvelHeroComicsResponse,
  MarvelHeroDetail,
  MarvelHeroDetailResponse,
  MarvelHeroEventsResponse,
  MarvelHeroResponse,
  MarvelHeroSeriesResponse,
  MarvelHeroStoriesResponse,
  MarvelListRequest,
  MarvelSeries,
  MarvelStories
} from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  listCache = new Map<string, MarvelHeroResponse | null>;
  heroCache = new Map<string, MarvelHeroDetail>;

  constructor(private http: HttpClient) { }

  search(payloadRequest: MarvelListRequest): Observable<MarvelHeroResponse> {

    const uri = `${marvelAPI}/${MarvelEndpoint.characters}`;
    const params = payloadRequest.toParams();
    const listCacheKey = uri + params.toString();

    if (this.listCache.has(listCacheKey)) {
      return of(this.listCache.get(listCacheKey) as MarvelHeroResponse);
    }

    return this.http.get<MarvelHeroResponse>(
      uri, { params }
    ).pipe(
      map(response => {
        this.listCache.set(listCacheKey, response);
        response.data.pages = Math.floor(response.data.total / apiPageSize);
        if (response.data.results.length === 0) {
          response.data.pages = 0;
        }
        return response;
      })
    );
  }

  loadHeroById(heroId: number): Observable<MarvelHeroDetail> {

    const heroesEndpointBase = `${marvelAPI}/${MarvelEndpoint.characters}/${heroId}`;
    const heroUris = [
      this.http.get<MarvelHeroDetailResponse>(heroesEndpointBase),
      this.http.get<MarvelHeroComicsResponse>(`${heroesEndpointBase}/comics`),
      this.http.get<MarvelHeroEventsResponse>(`${heroesEndpointBase}/events`),
      this.http.get<MarvelHeroSeriesResponse>(`${heroesEndpointBase}/series`),
      this.http.get<MarvelHeroStoriesResponse>(`${heroesEndpointBase}/stories`)
    ]

    if (this.heroCache.has(heroesEndpointBase)) {
      return of(this.heroCache.get(heroesEndpointBase) as MarvelHeroDetail);
    }

    return forkJoin(heroUris).pipe(
      map((response) => {
        const [detail, comics, events, series, stories] = response;
        const heroDetail: MarvelHeroDetail = {
          detail: detail.data.results[0] as MarvelHero,
          comics: comics.data.results as MarvelComics[] ?? [],
          events: events.data.results as MarvelEvents[] ?? [],
          series: series.data.results as MarvelSeries[] ?? [],
          stories: stories.data.results as MarvelStories[] ?? [],
          metrics: [
            {
            name: 'Comics',
            value: comics.data.total
          },
          {
            name: 'Series',
            value: series.data.total
          },
          {
            name: 'Stories',
            value: stories.data.total
          },
          {
            name: 'Events',
            value: events.data.total
          },
        ]
        };
        this.heroCache.set(heroesEndpointBase, heroDetail);
        return heroDetail;
      })
    );
  }

}
