import {Injectable, OnInit, Input} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Observable, throwError, of} from 'rxjs';
import {catchError, retry, map} from 'rxjs/operators';

import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {NewsApiService} from './news-api.service';

import {IFeedData, IRootFeeds} from './feedData';

const API_KEY = '8fe03e3dce6b42a39281a8f2e2336d58';

const httpOption = {
  headers: new HttpHeaders({'X-Api-Key': API_KEY})
};

@Injectable({providedIn: 'root'})
export class NewsFeedsService implements OnInit {
  error: any;
  headers: string[];
  allfeeds: IFeedData[];

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private newsapiservice: NewsApiService) {
      this.handleError = httpErrorHandler.createHandleError('NewsFeedsService');
  }

  topHeadlines(...args) {
    const {params = { language : 'en'}, options, cb}: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
    const url: string = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/top-headlines', params);

    return url;
  }
  everything(...args) {
    const {params, options, cb}: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
    const url = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/everything', params);
    return url;
  }
  sources(...args) {
    const {params, options, cb}: any = this.newsapiservice.splitArgsIntoOptionsAndCallback(args);
    const url = this.newsapiservice.createUrlFromEndpointAndOptions('/v2/sources', params);
    return url;
  }

  ngOnInit() {}

  getFeeds(): Observable < IFeedData[] > {
    return this.http
    // .get<IRootFeeds>(`${apiUrl}top-headlines?country=us&pageSize=20`, httpOption)
      .get < IRootFeeds > (this.topHeadlines({country: 'us', language: 'en', pageSize: 5}), httpOption)
      .pipe(catchError(this.handleError('getFeeds', [])), map((feeds: IRootFeeds) => {
      this.allfeeds = feeds.articles;
      return feeds.articles;
    }));
  }
  /*getFeedDetails(id: String): Observable<IFeedData[]> {
    console.log(this.allfeeds);
    return of(this.allfeeds.find(feed => feed.id === id));
  }*/
}
