export type RespEndpoint = 'sources' | 'everything';

export type RespOption = {
    options?: {
        sources?: string;
    };
};

export type LoadCallBack<T> = (data?: T) => void;
