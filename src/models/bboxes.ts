export interface BboxesResponse {
  data: BboxData;
  error: string;
  errorCode: string;
  message: string;
  status: string;
  statusCode: number;
}

export interface BboxData {
  bboxes: Bbox[];
  docId: string;
}

export interface Bbox {
  page: number;
  rectangle: number[];
}
