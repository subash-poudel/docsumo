import { useState } from "react";
import { SectionChildUiItem, SectionUiItem } from "../models/section";
import { DocumentControls } from "./DocumentControls";
import { DocumentPreview } from "./DocumentPreview";
import { getUiSections } from "../helpers/utils";

export function MainContent() {
  const [sections, setSections] = useState<SectionUiItem[]>(getUiSections());

  function handleSectionChecked(sectionUiItem: SectionChildUiItem) {
    const newSections: SectionUiItem[] = sections.map((section) => {
      if (section.id === sectionUiItem.sectionId) {
        const childrens = section.children.map((c) => {
          if (c.id === sectionUiItem.id) {
            return { ...sectionUiItem };
          }
          return c;
        });
        return { ...section, children: childrens };
      }
      return section;
    });
    setSections(newSections);
  }

  function handleSectionDeleted(sectionUiItem: SectionChildUiItem) {
    const newSections: SectionUiItem[] = sections.map((section) => {
      if (section.id === sectionUiItem.sectionId) {
        const childrens = section.children.filter((c) => {
          if (c.id === sectionUiItem.id) {
            return null;
          }
          return c;
        });
        return { ...section, children: childrens };
      }
      return section;
    });
    setSections(newSections);
  }

  function handleSelectAllClicked() {
    const newSections: SectionUiItem[] = sections.map((section) => {
      const childrens = section.children.map((c) => {
        return { ...c, isChecked: true };
      });
      return { ...section, children: childrens };
    });
    setSections(newSections);
  }

  return (
    <div className="flex flex-col flex-grow">
      <header className="bg-white shadow p-4 h-16">
        <h1 className="text-2xl font-semibold">Review Screen</h1>
      </header>

      <div className="flex h-calc-h-16">
        <DocumentPreview sections={sections} />
        <DocumentControls
          sections={sections}
          onItemChecked={handleSectionChecked}
          onItemDeleted={handleSectionDeleted}
          onSelectAllClicked={handleSelectAllClicked}
        />
      </div>
    </div>
  );
}
