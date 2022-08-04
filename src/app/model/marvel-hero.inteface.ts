import { Metric } from './metric.interface';

export interface MarvelHero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: MarvelImageThumb;
  resourceURI: string;
  comics: MarvelResource;
  series: MarvelResource;
  stories: MarvelResource;
  events: MarvelResource;
  urls: MarvelUrl[];
}

export interface MarvelResourceItem {
  resourceURI: string;
  name: string;
  type?: string;
}

export interface MarvelTypeDate {
  type: string;
  date: string;
}

export interface MarvelTypePrice {
  type: string;
  price: number;
}

export interface MarvelResource {
  available: number;
  collectionURI: string;
  items: MarvelResourceItem[];
  returned: number;
  description?: string;
}

export interface MarvelUrl {
  type: string;
  url: string;
}

export interface MarvelImageThumb {
  path: string;
  extension: string;
}

export interface MarvelTextObject {
  type: string;
  language: string;
  text: string;
}

export interface MarvelHeroDetail {
  detail: MarvelHero;
  comics: MarvelComics[];
  events: MarvelEvents[];
  series: MarvelSeries[];
  stories: MarvelStories[];
  metrics: Metric[];
}

export interface MarvelCharacter {
  available: number;
  collectionURI: string;
  items: MarvelResourceItem[];
  returned: number;
}

export interface MarvelComics {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: MarvelTextObject[];
  resourceURI: string;
  urls: MarvelUrl[];
  series: MarvelResourceItem;
  variants: MarvelResourceItem[];
  collections: MarvelResourceItem[];
  collectedIssues: MarvelResourceItem[];
  dates: MarvelTypeDate[];
  prices: MarvelTypePrice[];
  thumbnail: MarvelImageThumb;
  images: MarvelImageThumb[];
  characters: MarvelCharacter;
}

export interface MarvelEvents {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: MarvelUrl[];
  modified: string;
  start: string;
  end: string;
  thumbnail: MarvelImageThumb;
  characters: MarvelCharacter;
  next?: MarvelResourceItem;
  previous?: MarvelResourceItem;
}

export interface MarvelSeries {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: MarvelUrl[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: MarvelImageThumb;
  characters: MarvelCharacter;
  next?: MarvelResourceItem;
  previous?: MarvelResourceItem;
}

export interface MarvelStories {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: MarvelImageThumb;
  characters: MarvelCharacter;
  originalIssue: MarvelResourceItem;
}
