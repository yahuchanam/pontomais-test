import { HttpParams } from '@angular/common/http';
import { apiPageSize } from '../app.config';

export interface IMarvelListRequest {
  page: number;
  term: string;
}

export class MarvelListRequest implements IMarvelListRequest {
  page: number;
  term: string;
  constructor(data: IMarvelListRequest) {
    this.page = data.page;
    this.term = data.term;
  }

  toParams(): HttpParams {
    let params = new HttpParams()
      .set('limit', apiPageSize)
      .set('offset', (this.page - 1) * apiPageSize);

    if (this.term !== undefined && this.term !== '') {
      params = params.set('nameStartsWith', this.term);
    }

    return params;
  }
}
