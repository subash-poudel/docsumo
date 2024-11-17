import { getSection } from "../api/api";
import { SectionChildUiItem, SectionUiItem } from "../models/section";
import { getRandomColor } from "./colors";

export function getUiSections() {
  const {
    data: { sections: tempSections },
  } = getSection();
  const uiSections: SectionUiItem[] = tempSections.map((s) => {
    const children: SectionChildUiItem[] = s.children.map((c) => {
      const child: SectionChildUiItem = {
        ...c,
        sectionId: s.id,
        isChecked: false,
        color: getRandomColor(),
        fieldBannerColor: getRandomColor(1),
        isFocused: false,
      };
      return child;
    });
    const sectionUiItem: SectionUiItem = {
      ...s,
      isChecked: false,
      children: children,
    };
    return sectionUiItem;
  });
  return uiSections;
}
