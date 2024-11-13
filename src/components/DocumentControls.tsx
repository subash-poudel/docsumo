import { getSection } from "../api/api";
import { Button } from "../widgets/Button";
import { TabInfo, Tabs } from "../widgets/Tabs";
import { DocumentField } from "./DocumentField";

export function DocumentControls() {
  const {
    data: { sections: sectionsArray },
  } = getSection();
  const sections = sectionsArray[0].children;
  const tabs: TabInfo[] = sectionsArray.map((s) => {
    return { id: s.id, title: s.title, type: s.type };
  });
  return (
    <div className="flex flex-col w-96 h-full bg-green-200">
      Fields
      <Tabs tabs={tabs} />
      <div className="flex-grow bg-blue-100 p-2 flex flex-col gap-2 overflow-y-auto">
        {sections.map((s) => (
          <DocumentField section={s} key={s.id} />
        ))}
      </div>
      <div className="h-16 flex justify-between p-2">
        <Button>Select All</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
}
