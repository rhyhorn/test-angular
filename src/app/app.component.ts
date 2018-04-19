import {Component, OnInit} from '@angular/core';
import {NewsService} from './shared/news.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newsList = [];

    constructor(
        private newsService: NewsService
    ) {}

    ngOnInit() {
        this.newsService.filteredNews
            .subscribe((newsList) => {
                this.newsList = newsList;
            });
    }
}
