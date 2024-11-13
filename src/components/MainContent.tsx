import { DocumentControls } from "./DocumentControls";
import { DocumentPreview } from "./DocumentPreview";

export function MainContent() {
  return (
    <div className="flex flex-col flex-grow">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-semibold">Review Screen</h1>
      </header>

      <div className="flex h-full">
        <DocumentPreview />
        <DocumentControls />
      </div>
    </div>
  );
}
