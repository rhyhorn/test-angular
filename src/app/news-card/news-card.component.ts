import {Component, Input} from '@angular/core';

import {News} from '../shared/news';

@Component({
    selector: 'news-card',
    templateUrl: './news-card.component.html'
})
export class NewsCardComponent {
    @Input() news: News;
}