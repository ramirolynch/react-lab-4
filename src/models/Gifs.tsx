export interface GiphyAPIResponse {
  data: Gifs[];
  pagination: any;
  meta: MetaProperties;
}

export interface Gifs {
  id: string;
  title: string;
  images: { original: { url: string } };
}

export interface MetaProperties {
  status: number;
  msg: string;
  response_id: string;
}
