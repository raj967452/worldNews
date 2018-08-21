import { Injectable } from '@angular/core';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { stringify, parse } from 'querystring';

const API_KEY = '8fe03e3dce6b42a39281a8f2e2336d58';
const host = 'https://newsapi.org';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private handleError: HandleError;

  constructor(httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('NewsApiService');
  }

  splitArgsIntoOptionsAndCallback(args): object {
    let params, options, cb;
    if (args.length > 1) {
      const possibleCb = args[args.length - 1];
      if ('function' === typeof possibleCb) {
        cb = possibleCb;
        options = args.length === 3 ? args[1] : undefined;
      } else {
        options = args[1];
      }
      params = args[0];
    } else if ('object' === typeof args[0]) {
      params = args[0];
    } else if ('function' === typeof args[0]) {
      cb = args[0];
    }
    return { params, options, cb };
  }

  createUrlFromEndpointAndOptions(endpoint, options): string {
    const query = stringify(options);
    const baseURL = `${host}${endpoint}`;
    return query ? `${baseURL}?${query}` : baseURL;
  }
}
