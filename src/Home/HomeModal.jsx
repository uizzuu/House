import { Modal, Button } from "react-bootstrap";
import Detail from "../Detail/Detail";

function HomeModal({ show, onHide, roomId }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton style={{ height: "60px", padding: "10px 30px" }}>
        <Modal.Title>방 상세보기</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "20px 30px 40px" }}>
        {roomId !== null && <Detail id={roomId} />}
      </Modal.Body>
    </Modal>
  );
}

export default HomeModal;
