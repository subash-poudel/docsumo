import { getSection } from "../api/api";
import { DocumentControls } from "./DocumentControls";
import { DocumentPreview } from "./DocumentPreview";

export function MainContent() {
  const {
    data: { sections },
  } = getSection();
  return (
    <div className="flex flex-col flex-grow">
      <header className="bg-white shadow p-4 h-16">
        <h1 className="text-2xl font-semibold">Review Screen</h1>
      </header>

      <div className="flex h-calc-h-16">
        <DocumentPreview sections={sections}/>
        <DocumentControls sections={sections} />
      </div>
    </div>
  );
}
