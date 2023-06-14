import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { CurrentDate } from '../view/date/date';
import { CurrentTime } from '../view/time/time';
import { ArticlesResponse } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    date: CurrentDate;
    time: CurrentTime;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.date = new CurrentDate();
        this.time = new CurrentTime();
    }

    start() {
        const source: Element | null = document.querySelector('.sources');
        if (source) {
            source.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ArticlesResponse) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data: ArticlesResponse) => this.view.drawSources(data));
        this.date.showDate();
        this.time.showTime();
    }
}

export default App;
