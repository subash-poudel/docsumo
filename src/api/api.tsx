import camelize from "camelize-ts";
import { PageResponse } from "../models/page";
import pageResponse from "../static_data/pages.json";
import sectionResponse from "../static_data/sections.json";
import bboxesResponse from "../static_data/bboxes_a2cbec1124234a6d846f908ba9531a2e.json";
import { SectionResponse } from "../models/section";
import { BboxesResponse } from "../models/bboxes";

export function getPage(): PageResponse {
  return camelize(pageResponse);
}

export function getSection(): SectionResponse {
  return camelize(sectionResponse) as SectionResponse;
}

export function getBboxes(): BboxesResponse {
  return camelize(bboxesResponse);
}

