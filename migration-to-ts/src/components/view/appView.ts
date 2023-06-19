import News from './news/news';
import Sources from './sources/sources';
import { ArticlesResponse, SourcesResponse, NewsResponse } from '../../types/index';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse): void {
        const values: NewsResponse[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ArticlesResponse): void {
        const values: SourcesResponse[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
