import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsCardComponent} from './news-card/news-card.component';
import {FilterFormComponent} from './filter-form/filter-form.component';

import {NewsService} from './shared/news.service';

@NgModule({
    declarations: [
        AppComponent,
        NewsCardComponent,
        NewsListComponent,
        FilterFormComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        NewsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
