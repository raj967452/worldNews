export type IRootFeeds = IRootObject<IFeedData[]>;

export interface IRootObject<T> {
    count: number;
    articles: T ;
}

export interface IFeedData {
    source?: string[];
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}
export interface Isource {
    id: string;
    name: string;
}

export interface DialogData {
    country: string;
}
