import './news.css';
import { NewsResponse } from '../../../types/index';
import news_placeholder from './img/news_placeholder.jpg';

class News {
    draw(data: NewsResponse[]): void {
        const news: readonly NewsResponse[] =
            data.length >= 10 ? data.filter((_item: NewsResponse, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item: NewsResponse, idx: number) => {
                const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;
                if (idx % 2) {
                    const newsCloneItem: HTMLElement | null = newsClone.querySelector('.news__item');
                    if (newsCloneItem) {
                        newsCloneItem.classList.add('alt');
                    }
                }

                const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto) {
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || news_placeholder})`;
                }

                const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor) {
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }

                const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate) {
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitle) {
                    newsDescriptionTitle.textContent = item.title;
                }

                const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource) {
                    newsDescriptionSource.textContent = item.source.name;
                }

                const newsDescriptionСontent: HTMLElement | null =
                    newsClone.querySelector('.news__description-content');
                if (newsDescriptionСontent) {
                    newsDescriptionСontent.textContent = item.description;
                }

                const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }
                fragment.append(newsClone);
            });
        }
        const newsMain: HTMLElement | null = document.querySelector('.news');
        if (newsMain) {
            newsMain.innerHTML = '';
            newsMain.appendChild(fragment);
        }
    }
}

export default News;
