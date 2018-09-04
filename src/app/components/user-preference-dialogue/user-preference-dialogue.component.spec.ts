import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferenceDialogueComponent } from './user-preference-dialogue.component';

describe('UserPreferenceDialogueComponent', () => {
  let component: UserPreferenceDialogueComponent;
  let fixture: ComponentFixture<UserPreferenceDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferenceDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferenceDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
