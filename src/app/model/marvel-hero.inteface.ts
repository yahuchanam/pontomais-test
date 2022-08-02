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

export interface MarvelResource {
  available: number;
  collectionURI: string;
  items: MarvelResourceItem[];
  returned: number;
}

export interface MarvelUrl {
  type: string;
  url: string;
}

export interface MarvelImageThumb {
  path: string;
  extension: string;
}
