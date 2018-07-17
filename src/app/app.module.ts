import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message/message.service';
import { MessageComponent } from './message/message.component';
import { NewsFeedsService } from './newsFeedServices/news-feeds.service';
import { NewsFeedsListComponent } from './newsFeedComponent/news-feeds-list/news-feeds-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    MessageComponent,
    NewsFeedsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    NewsFeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
