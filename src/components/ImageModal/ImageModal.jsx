import Modal from "react-modal";

const styles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: "2" },
  content: {
    padding: "0",
    borderRadius: "10px",
    height: "calc(100vh - 120px)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({
  onCloseModal,
  info: { full, alt_description },
}) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onCloseModal}
      shouldCloseOnEsc={true}
      style={styles}
      contentLabel="Example Modal"
    >
      <img src={full} alt={alt_description} width={"100%"} height={"100%"} />
    </Modal>
  );
}
