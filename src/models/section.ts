export interface SectionResponse {
  data: SectionData;
  error: string;
  errorCode: string;
  message: string;
  status: string;
  statusCode: number;
}

export interface SectionData {
  rtUpdateFields: [];
  sections: Section[];
}

export interface Section {
  children: SectionChild[];
  id: number;
  title: string;
  type: string;
}

export interface SectionUiItem extends Section {
  isChecked: boolean;
  children: SectionChildUiItem[];
}

export interface SectionChildUiItem extends SectionChild {
  sectionId: number;
  isChecked: boolean;
  color: string;
  fieldBannerColor: string;
}

export interface SectionChild {
  acc: number;
  content: SectionChildContent;
  docId: string;
  format: string;
  formatMessage: string;
  id: number;
  idAutoExtract: number;
  idAutoExtractLabel: string;
  ignore: boolean;
  label: string;
  lowConfidence: boolean;
  noItemsRow: number;
  order: number;
  orgId: string;
  pTitle: string;
  pType: string;
  parentId: number;
  timeSpent: number;
  type: string;
  userId: string;
}

export interface SectionChildContent {
  confidence: number;
  isValidFormat: boolean;
  origValue: string;
  page: number;
  position: number[];
  positionLabel: string[];
  reviewRequired: boolean;
  validationSource: string;
  value: string;
}
