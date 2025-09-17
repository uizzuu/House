import { Modal, Button } from "react-bootstrap";

function ReportModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton style={{ height: "60px" }}>
        <Modal.Title>허위매물 신고</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>신고 내용을 입력해주세요.</p>
        <textarea
          style={{
            width: "100%",
            height: "120px",
            padding: "8px",
            resize: "none",
          }}
          placeholder="신고 사유를 입력하세요."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          취소
        </Button>
        <Button variant="primary" onClick={onHide}>
          제출
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportModal;
