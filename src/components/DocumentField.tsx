import { SectionChild } from "../models/section";
import { Checkbox } from "../widgets/Checkbox";
import { FieldBanner } from "../widgets/FieldBanner";

export function DocumentField({ section }: { section: SectionChild }) {
  return (
    <div className="flex align-middle">
      <FieldBanner title={section.label} />
      <div className="flex-grow p-2 justify-center">
        <p>{section.label}</p>
        <p>{section?.content?.value}</p>
      </div>
      <Checkbox />
    </div>
  );
}
