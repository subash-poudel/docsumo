export interface Root {
  data: PageData;
  error: string;
  errorCode: string;
  message: string;
  status: string;
  statusCode: number;
}

export interface PageData {
  documents: PageDocument[];
  limit: number;
  offset: number;
  total: number;
}

export interface PageDocument {
  docId: string;
  excelType: boolean;
  pages: Page[];
  status: string;
  title: string;
  type: string;
}

export interface Page {
  id: number;
  image: Image;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
