import { Injectable } from '@angular/core';

import { ContentType } from '../content-type';
import { CONTENT_TYPES } from '../content-type';

@Injectable()
export class ContentTypeService {

  constructor() { }

  getContentTypes(): Promise<ContentType[]> {
    return Promise.resolve(CONTENT_TYPES);
  }

  getContentTypesSlowly(): Promise<ContentType[]> {
    return new Promise<ContentType[]>(resolve =>
      setTimeout(resolve, 2000))
      .then(() => this.getContentTypes());
  }

}
