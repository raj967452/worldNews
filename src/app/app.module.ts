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
import {ConfigComponent} from './config/config.component';

import {ConfigService} from './config/config.service';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message/message.service';
import {MessageComponent} from './message/message.component';
import {NewsFeedsService} from './newsFeedServices/news-feeds.service';
import {NewsApiService} from './newsFeedServices/news-api.service';

import {NewsFeedsListComponent} from './newsFeedComponent/news-feeds-list/news-feeds-list.component';
import {NewsFeedsDetailsComponent} from './newsFeedComponent/news-feeds-details/news-feeds-details.component';
import {AppRoutingModule} from './/app-routing.module';

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
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent, ConfigComponent, MessageComponent, NewsFeedsListComponent, NewsFeedsDetailsComponent
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
  providers: [
    ConfigService, HttpErrorHandler, MessageService, NewsApiService, NewsFeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}