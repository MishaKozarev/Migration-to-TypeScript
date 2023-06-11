export interface NewsResponse {
    urlToImage: string;
    author: string;
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

export interface  SourcesResponse {
    name: string;
    id: string;
}