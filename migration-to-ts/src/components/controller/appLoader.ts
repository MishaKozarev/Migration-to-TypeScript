import Loader from './loader';

enum LoaderUrlApiKey {
    url = 'https://rss-news-api.onrender.com/',
    keyAPI = 'cf436ac028804f3e8cb88556155d0522',
}

class AppLoader extends Loader {
    constructor() {
        super(LoaderUrlApiKey.url, {
            apiKey: LoaderUrlApiKey.keyAPI,
        });
    }
}

export default AppLoader;
