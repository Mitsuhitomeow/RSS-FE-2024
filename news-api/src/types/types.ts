export type RespEndpoint = 'sources' | 'everything';

export type RespOption = {
    sources?: string;
};

export type LoadCallBack<T> = (data?: T) => void;
