import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import {AppComponent} from './app.component';

import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message/message.service';
import {NewsFeedsService} from './services/newsFeedServices/news-feeds.service';
import {NewsApiService} from './services/newsFeedServices/news-api.service';

import {MessageComponent} from './message/message.component';
import {NewsFeedsListComponent} from './components/newsFeedComponent/news-feeds-list/news-feeds-list.component';
import {NewsFeedsDetailsComponent} from './components/newsFeedComponent/news-feeds-details/news-feeds-details.component';
import {AppRoutingModule} from './app-routing.module';

import { DefaultImageDirective } from './directive/default-image.directive';
import { UserPreferenceDialogueComponent } from './components/user-preference-dialogue/user-preference-dialogue.component';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: []
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewsFeedsListComponent,
    NewsFeedsDetailsComponent,
    DefaultImageDirective,
    UserPreferenceDialogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    UserPreferenceDialogueComponent
  ],
  providers: [
    HttpErrorHandler, MessageService, NewsApiService, NewsFeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
