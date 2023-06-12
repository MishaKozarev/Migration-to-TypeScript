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

export interface SourcesResponse {
    name: string;
    id: string;
}

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
    statusText: string;
    status: number;
    ok: boolean;
    json(): Promise<string>;
}

export interface Event {
    e: HTMLElement;
    target: HTMLElement;
    currentTarget: HTMLElement;
}
