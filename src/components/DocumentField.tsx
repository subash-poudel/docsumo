import { SectionChildUiItem } from "../models/section";
import { Checkbox } from "../widgets/Checkbox";
import { FieldBanner } from "../widgets/FieldBanner";
import { MdDelete } from "react-icons/md";

export function DocumentField({
  section,
  onItemChecked,
  onItemDeleted,
}: {
  section: SectionChildUiItem;
  onItemChecked: (item: SectionChildUiItem) => void;
  onItemDeleted: (item: SectionChildUiItem) => void;
}) {
  return (
    <div className="flex items-center">
      <FieldBanner title={section.label} />
      <div className="flex-grow p-2 justify-center">
        <p>{section.label}</p>
        <p>{section?.content?.value}</p>
      </div>
      {section?.content?.position?.length > 0 && (
        <Checkbox section={section} onItemChecked={onItemChecked} />
      )}
      <MdDelete
        className="w-6 h-6"
        color="#AF3C3F"
        onClick={() => onItemDeleted(section)}
      />
    </div>
  );
}
