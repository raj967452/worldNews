import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedsDetailsComponent } from './news-feeds-details.component';

describe('NewsFeedsDetailsComponent', () => {
  let component: NewsFeedsDetailsComponent;
  let fixture: ComponentFixture<NewsFeedsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
