import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/from';

import {News} from './news';

const NEWS = [{
    title: 'Это видео взорвало интернет',
    category: 'video'
},{
    title: 'Эта новость шокировала всех',
    category: 'text'
},{
    title: 'Этот котик не оставит равнодушных',
    category: 'image'
},{
    title: 'Каскадер выполнил что-то невообразимое',
    category: 'video'
},{
    title: 'МОЛНИЯ! Спекулянты взвинтили цены на укроп',
    category: 'text'
},{
    title: 'Каким будет Angular 24? Все нововведения в одной картинке!',
    category: 'image'
}];

@Injectable()
export class NewsService {
    filteredNews = new Subject();
    searchTerm = '';
    
    constructor() {
        this.filteredNews = new Observable((observer) => {
            observer.next(this.getFilteredNewsList(NEWS));
        });
    }

    setSearchTerm(term: string) {
        this.searchTerm = term;
        this.filteredNews.subscribe();
    }

    getFilteredNewsList(newsList) {
        return newsList.filter((news) => {
           return news.title.indexOf(this.searchTerm) !== -1;
        });
    }
}
