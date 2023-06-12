import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ArticlesResponse } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const source: Element | null = document.querySelector('.sources');
        if (source) {
            source.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ArticlesResponse) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data: ArticlesResponse) => this.view.drawSources(data));
    }
}

export default App;
