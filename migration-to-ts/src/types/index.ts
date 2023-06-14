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
    name: string;
    id: string;
}

export type SourcesResponse = Pick<NewsResponse, 'name' | 'id'>;

export interface ArticlesResponse {
    articles: NewsResponse[];
    sources: SourcesResponse[];
}

export interface OptionsApiKey {
    [apiKey: string]: string;
}

export interface OptionsEndpoint {
    endpoint: string;
    options?: OptionsApiKey;
}
export interface ResApi {
    statusText: Partial<string>;
    status: Partial<number>;
    ok: Partial<boolean>;
    json(): Promise<string>;
}
