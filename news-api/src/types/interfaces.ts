export interface ArrSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourceTypes extends ArrSource {
    status: string;
    sources: ArrSource[];
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsArticle extends Article {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface ArrHeadlines {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Headlines extends ArrHeadlines {
    status: string;
    totalResults: number;
    articles: ArrHeadlines[];
}

export interface Errors {
    status: string;
    code: string;
    message: string;
}
