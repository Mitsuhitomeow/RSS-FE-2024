export type RespEndpoint = 'sources' | 'everything';

export type RespOption = {
    sources?: string;
};

export type CallbackResp<T> = (data: T) => void;