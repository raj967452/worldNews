import { TestBed, inject } from '@angular/core/testing';

import { NewsFeedsService } from './news-feeds.service';

describe('NewsFeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeedsService]
    });
  });

  it('should be created', inject([NewsFeedsService], (service: NewsFeedsService) => {
    expect(service).toBeTruthy();
  }));
});
