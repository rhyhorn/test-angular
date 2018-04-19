import {Component} from '@angular/core';
import {NewsService} from '../shared/news.service';

@Component({
    selector: 'filter-form',
    templateUrl: './filter-form.component.html'
})
export class FilterFormComponent {
    serchTerm: string = '';
    categories: string[] = [];

    constructor(private newsService: NewsService) {}

    onSearch(searchTerm, event) {
        event.preventDefault();
        this.newsService.setSearchTerm(searchTerm);
    }
}
