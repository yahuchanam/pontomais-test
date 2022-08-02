export interface MarvelResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelResponseData<T>;
}

export interface MarvelResponseData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
