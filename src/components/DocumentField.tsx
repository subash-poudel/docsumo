import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const border = isHovered ? "border-blue-500" : "border-gray-300";
  function handleFocus(item: SectionChildUiItem, isFocused: boolean) {
    setIsHovered(isFocused);
    const newitem = { ...item, isFocused: isFocused };
    onItemChecked(newitem);
  }
  return (
    <div
      className={`flex items-center border ${border} bg-gray-200 dark:bg-gray-900`}
      tabIndex={section.id}
      onMouseEnter={() => handleFocus(section, true)}
      onMouseLeave={() => handleFocus(section, false)}
    >
      <FieldBanner title={section.label} color={section.fieldBannerColor} />
      <div className="flex-grow p-2 justify-center">
        <h2 className="text-md font-bold">{section.label}</h2>
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
