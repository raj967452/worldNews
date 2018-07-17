import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { FeedData } from './feedData';
import { ConfigService } from '../config/config.service';
import { Config } from '../config/config';



const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),
  key: '8fe03e3dce6b42a39281a8f2e2336d58'
};

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {

  error: any;
  config: Config;
  feedUrl: {};
  headers: string[];

  private handleError: HandleError;
  private configData: ConfigService;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler, configService: ConfigService) {
      this.handleError = httpErrorHandler.createHandleError('NewsFeedsService');
      this.configData = configService;

      this.configData.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        /*const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);*/

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
        console.log(this.config);
      });
  }



  /*showConfig() {
    this.configData.getConfig()
    .subscribe((data: Config) => this.config = {
      feedUrl: data['feedUrl']
    },
    error => this.error = error );
  }*/

  getFeeds (): Observable<FeedData[]> {
    return this.http.get<FeedData[]>(this.config.feedUrl)
    .pipe(
      retry(3),
      catchError(this.handleError('getFeeds', []))
    );
  }
}
