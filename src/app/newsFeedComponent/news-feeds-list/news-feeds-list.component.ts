import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from '../../newsFeedServices/news-feeds.service';

import { FeedData } from '../../newsFeedServices/feedData';

@Component({
  selector: 'app-news-feeds-list',
  templateUrl: './news-feeds-list.component.html',
  styleUrls: ['./news-feeds-list.component.css'],
  providers: [NewsFeedsService]
})
export class NewsFeedsListComponent implements OnInit {
  feeds: FeedData[];
  constructor(private newsfeedsService: NewsFeedsService) { }

  ngOnInit() {
    this.getFeeds();
  }
  getFeeds(): void {
    this.newsfeedsService.getFeeds()
      .subscribe(feeds => this.feeds = feeds);
  }

}
