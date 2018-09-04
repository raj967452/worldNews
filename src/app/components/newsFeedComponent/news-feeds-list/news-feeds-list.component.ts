import {Component, OnInit} from '@angular/core';
import {NewsFeedsService} from '../../../services/newsFeedServices/news-feeds.service';
import { catchError, map } from 'rxjs/operators';
import {IFeedData} from '../../../services/newsFeedServices/feedData';
import { Observable } from 'rxjs';
import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';


@Component({
  selector: 'app-news-feeds-list',
  templateUrl: './news-feeds-list.component.html',
  styleUrls: ['./news-feeds-list.component.less'],
  providers: [NewsFeedsService]})
export class NewsFeedsListComponent implements OnInit {
  errorMsg: string;
  feedsData$: IFeedData[];
  private handleError: HandleError;

  constructor(private newsfeedsService: NewsFeedsService, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('NewsFeedsService');
  }

  ngOnInit() {
    this.getFeeds();
  }
  getFeeds() {
    this.newsfeedsService.getFeeds().subscribe(
      topFeeds => (this.feedsData$ = topFeeds),
      // Report errors in this 2nd subscribe parameter
      err => this.errorMsg = err.message
    );
  }
  loadmore(): void {
    console.log('load more news....');
  }

}
