import { SectionChildUiItem, SectionUiItem } from "../models/section";
import { Button } from "../widgets/Button";
import { TabInfo, Tabs } from "../widgets/Tabs";
import { DocumentField } from "./DocumentField";

export function DocumentControls({
  sections,
  onItemChecked,
  onItemDeleted,
  onSelectAllClicked,
  onConfirmClicked,
}: {
  sections: SectionUiItem[];
  onItemChecked: (item: SectionChildUiItem) => void;
  onItemDeleted: (item: SectionChildUiItem) => void;
  onSelectAllClicked: () => void;
  onConfirmClicked: () => void;
}) {
  const allSections = sections.flatMap((s) => s.children);

  const tabs: TabInfo[] = sections.map((s) => {
    return { id: s.id, title: s.title, type: s.type };
  });
  const selectionCount = allSections.filter((s) => s.isChecked).length;
  console.log({ selectionCount });
  return (
    <div className="flex flex-col w-96 h-full bg-green-200">
      <Tabs tabs={tabs} />
      <div className="flex-grow bg-blue-100 p-2 flex flex-col gap-2 overflow-y-auto">
        {allSections.map((s) => (
          <DocumentField
            section={s}
            key={s.id}
            onItemChecked={onItemChecked}
            onItemDeleted={onItemDeleted}
          />
        ))}
      </div>
      <div className="h-16 flex justify-between p-2">
        <Button onClick={onSelectAllClicked}>Select All</Button>
        <Button disabled={selectionCount === 0} onClick={onConfirmClicked}>
          Confirm
        </Button>
      </div>
    </div>
  );
}
