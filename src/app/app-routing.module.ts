import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsFeedsListComponent} from './components/newsFeedComponent/news-feeds-list/news-feeds-list.component';
import {NewsFeedsDetailsComponent} from './components/newsFeedComponent/news-feeds-details/news-feeds-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'news', component: NewsFeedsListComponent},
  { path: 'news/:id', component: NewsFeedsDetailsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
