declare module '@apiverve/keywordextractor' {
  export interface keywordextractorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface keywordextractorResponse {
    status: string;
    error: string | null;
    data: KeywordExtractorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface KeywordExtractorData {
      url:              null | string;
      keywordCount:     number | null;
      topKeyword:       null | string;
      totalOccurrences: number | null;
      keywords:         Keywords;
      topKeywords:      TopKeyword[];
  }
  
  interface Keywords {
      email:      number | null;
      address:    number | null;
      mail:       number | null;
      domain:     number | null;
      addresses:  number | null;
      characters: number | null;
      retrieved:  number | null;
      internet:   number | null;
      message:    number | null;
      validation: number | null;
  }
  
  interface TopKeyword {
      keyword:    null | string;
      count:      number | null;
      percentage: number | null;
  }

  export default class keywordextractorWrapper {
    constructor(options: keywordextractorOptions);

    execute(callback: (error: any, data: keywordextractorResponse | null) => void): Promise<keywordextractorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: keywordextractorResponse | null) => void): Promise<keywordextractorResponse>;
    execute(query?: Record<string, any>): Promise<keywordextractorResponse>;
  }
}
