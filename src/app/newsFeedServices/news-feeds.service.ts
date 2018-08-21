import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { IFeedData, IRootFeeds } from './feedData';
import { ConfigService } from '../config/config.service';
import { Config } from '../config/config';
import { NewsApiService } from './news-api.service';


const apiUrl = 'https://newsapi.org/v2/';
const API_KEY = '8fe03e3dce6b42a39281a8f2e2336d58';
const host = 'https://newsapi.org';

const httpOption = {
  headers: new HttpHeaders({
    'X-Api-Key' : API_KEY
  })
};

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService implements OnInit {

  error: any;
  config: any;
  // feedUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=8fe03e3dce6b42a39281a8f2e2336d58';

  headers: string[];
  allfeeds: IFeedData[];
  private handleError: HandleError;
  private configData: ConfigService;

  constructor(
    private http: HttpClient,
            httpErrorHandler: HttpErrorHandler,
            configService: ConfigService,
            private newsapiservice: NewsApiService) {
      this.handleError = httpErrorHandler.createHandleError('NewsFeedsService');
      this.configData = configService;
    }

    topHeadlines (...args) {
      const { params = { language: 'en' }, options, cb }: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
      console.log(params);
      const url: string = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/top-headlines', params);
      console.log(url);
      return url;
    }

    everything (...args) {
      const { params, options, cb }: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
      const url = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/everything', params);
      return url;
    }

    sources (...args) {
      const { params, options, cb }: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
      const url = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/sources', params);
      return url;
    }

  ngOnInit() {
    /*this.configData.getConfig().subscribe(res => this.config = res );*/
  }

  getFeeds(): Observable<IFeedData[]> {
   return this.http
      // .get<IRootFeeds>(`${apiUrl}top-headlines?country=us&pageSize=5`, httpOption)
      .get<IRootFeeds>(this.topHeadlines({
        country: 'us',
        language: 'en',
        pageSize: 5
      }), httpOption)
      .pipe(
        catchError(this.handleError('getFeeds', [])),
        map((feeds: IRootFeeds) => {
          this.allfeeds = feeds.articles;
          return feeds.articles;
        })
      );
  }
  /*getFeedDetails(id: String): Observable<IFeedData[]> {
    console.log(this.allfeeds);
    return of(this.allfeeds.find(feed => feed.id === id));
  }*/
}
