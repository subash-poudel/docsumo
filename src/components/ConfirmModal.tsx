import Modal from "react-modal";
import { Button } from "../widgets/Button";
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
Modal.setAppElement('#root');


export function ConfirmModal({
  setIsOpen,
  isOpen,
  onConfirmed
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onConfirmed: () => void;
}) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-xl font-bold">Confirm</h2>
      <p className="mt-2">Are you sure you want to confirm the selected fields?</p>
      <div className="flex justify-between mt-4">
        <Button onClick={onConfirmed}>Yes</Button>
        <Button onClick={closeModal}>No</Button>
      </div>
    </Modal>
  );
}
