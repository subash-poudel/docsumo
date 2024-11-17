import { SectionChildUiItem } from "../models/section";
import { Checkbox } from "../widgets/Checkbox";
import { FieldBanner } from "../widgets/FieldBanner";

export function DocumentField({
  section,
  onItemChecked,
}: {
  section: SectionChildUiItem;
  onItemChecked: (item: SectionChildUiItem) => void;
}) {
  return (
    <div className="flex align-middle">
      <FieldBanner title={section.label} />
      <div className="flex-grow p-2 justify-center">
        <p>{section.label}</p>
        <p>{section?.content?.value}</p>
      </div>
      {section?.content?.position?.length > 0 && (
        <Checkbox section={section} onItemChecked={onItemChecked} />
      )}
    </div>
  );
}
