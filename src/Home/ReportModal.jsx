import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ReportModal({ show, onHide, onSubmit }) {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (reason.trim() !== "") {
      onSubmit(reason, new Date()); // Home으로 내용 전달
      setReason(""); // 모달 초기화
      onHide();
    }
  };

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
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          취소
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          제출
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportModal;
