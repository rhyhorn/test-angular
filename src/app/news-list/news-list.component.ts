import {Component, Input} from '@angular/core';

import {News} from '../shared/news';

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html'
})
export class NewsListComponent {
    @Input() newsList: News[] = [];
}