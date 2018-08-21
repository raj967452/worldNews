import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {NewsFeedsService} from '../../newsFeedServices/news-feeds.service';
import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';

import {IFeedData} from '../../newsFeedServices/feedData';

@Component({
  selector: 'app-news-feeds-details',
  templateUrl: './news-feeds-details.component.html',
  styleUrls: ['./news-feeds-details.component.css']
})
export class NewsFeedsDetailsComponent implements OnInit {
  errorMsg: string;
  feedsDetails$: IFeedData[];

  private handleError: HandleError;
  constructor(
    private route: ActivatedRoute,
    private newsfeedsService: NewsFeedsService,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('NewsFeedsService');
    }

  ngOnInit() {
    this.getFeedDetails();
  }
  getFeedDetails() {
    /*const id = this.route.snapshot.paramMap.get('id');
    this.newsfeedsService.getFeedDetails(id).subscribe(
      feedDetails => (this.newsfeedsService = feedDetails),
      err => this.errorMsg = err.message
    );*/
  }

}
