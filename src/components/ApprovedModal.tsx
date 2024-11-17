import Modal from "react-modal";
import { Button } from "../widgets/Button";
import { SectionUiItem } from "../models/section";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export function ApprovedModal({
  setIsOpen,
  isOpen,
  sections,
}: {
  isOpen: boolean;
  sections: SectionUiItem[];
  setIsOpen: (open: boolean) => void;
}) {
  function closeModal() {
    setIsOpen(false);
  }
  const allEnabledSections = sections
    .flatMap((s) => s.children)
    .filter((s) => s.isChecked)
    .filter((s) => s.content?.position?.length > 0); // some fields have no value
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p className="mt-2">You have approved the following items:</p>
      {allEnabledSections.map((s, i) => {
        return (
          <div className="mt-2" key={i}>
            <p className="text-xl font-bold">{s.label}:</p>
            <p>{s.content?.value}</p>
          </div>
        );
      })}
      <div className="flex justify-between mt-4">
        <Button onClick={closeModal}>Close</Button>
      </div>
    </Modal>
  );
}
