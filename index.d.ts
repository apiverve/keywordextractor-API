declare module '@apiverve/keywordextractor' {
  export interface keywordextractorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface keywordextractorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class keywordextractorWrapper {
    constructor(options: keywordextractorOptions);

    execute(callback: (error: any, data: keywordextractorResponse | null) => void): Promise<keywordextractorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: keywordextractorResponse | null) => void): Promise<keywordextractorResponse>;
    execute(query?: Record<string, any>): Promise<keywordextractorResponse>;
  }
}
