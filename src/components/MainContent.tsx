import { useState } from "react";
import { SectionChildUiItem, SectionUiItem } from "../models/section";
import { DocumentControls } from "./DocumentControls";
import { DocumentPreview } from "./DocumentPreview";
import { getUiSections } from "../helpers/utils";
import { ConfirmModal } from "./ConfirmModal";
import { ApprovedModal } from "./ApprovedModal";
import ThemeToggle from "./ThemeToggle";
import { ZoomSelect } from "./ZoomSelect";
import { ZOOM_OPTIONS } from "../models/constants";

export function MainContent() {
  const [sections, setSections] = useState<SectionUiItem[]>(getUiSections());
  const [showConfirmQuestionModal, setShowConfirmQuestionModal] =
    useState(false);
  const [showApprovedModal, setShowApprovedModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(ZOOM_OPTIONS[0]);
  // The caller makes changes to sectionUiItem object
  function handleSectionItemPropertyChanged(sectionUiItem: SectionChildUiItem) {
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

  function handleConfirmButtonClicked() {
    setShowConfirmQuestionModal(true);
  }

  return (
    <div className="flex flex-col flex-grow ">
      <header className="flex  justify-between bg-white dark:bg-gray-900 shadow p-4 h-16">
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          Review Screen
        </h1>
        <div className="flex gap-3">
          <ZoomSelect
            setZoomLevel={(z) => setZoomLevel(z)}
            zoomLevel={zoomLevel}
          />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex h-calc-h-16">
        <DocumentPreview sections={sections} zoomLevel={zoomLevel} />
        <DocumentControls
          sections={sections}
          onItemChecked={handleSectionItemPropertyChanged}
          onItemDeleted={handleSectionDeleted}
          onSelectAllClicked={handleSelectAllClicked}
          onConfirmClicked={handleConfirmButtonClicked}
        />
      </div>
      <ConfirmModal
        isOpen={showConfirmQuestionModal}
        setIsOpen={setShowConfirmQuestionModal}
        onConfirmed={() => {
          setShowConfirmQuestionModal(false);
          setShowApprovedModal(true);
        }}
      />
      <ApprovedModal
        sections={sections}
        isOpen={showApprovedModal}
        setIsOpen={setShowApprovedModal}
      />
    </div>
  );
}
