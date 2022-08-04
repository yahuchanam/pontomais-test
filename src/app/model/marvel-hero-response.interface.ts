import {
  MarvelComics,
  MarvelEvents,
  MarvelHero,
  MarvelHeroDetail,
  MarvelSeries,
  MarvelStories,
} from './marvel-hero.inteface';
import { MarvelResponse } from './marvel.interface';

export interface MarvelHeroResponse extends MarvelResponse<MarvelHero> {}
export interface MarvelHeroDetailResponse
  extends MarvelResponse<MarvelHero> {}
export interface MarvelHeroComicsResponse
  extends MarvelResponse<MarvelComics> {}
export interface MarvelHeroSeriesResponse
  extends MarvelResponse<MarvelSeries> {}
export interface MarvelHeroStoriesResponse
  extends MarvelResponse<MarvelStories> {}
export interface MarvelHeroEventsResponse
  extends MarvelResponse<MarvelEvents> {}
