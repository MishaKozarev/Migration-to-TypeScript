import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cf436ac028804f3e8cb88556155d0522', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
