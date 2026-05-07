export interface Lookups {
  cacheTimestamp: number;
  lookups: Record<string, BasicLK>;
  localTimestamp: number;
}

export interface BasicLK {
  description?: string;
  shortDescription?: string;
  seqno?: number;
  activeFlg?: boolean;
}
