import camelize from "camelize-ts";
import { PageResponse } from "../models/page";
import pageResponse from "../static_data/pages.json";
import sectionResponse from "../static_data/sections.json";
import { SectionResponse } from "../models/section";

export function getPage(): PageResponse {
  return camelize(pageResponse);
}

export function getSection(): SectionResponse {
  return camelize(sectionResponse) as SectionResponse;
}
