import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedsListComponent } from './news-feeds-list.component';

describe('NewsFeedsListComponent', () => {
  let component: NewsFeedsListComponent;
  let fixture: ComponentFixture<NewsFeedsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
