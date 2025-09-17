import { Container, Row, Col } from "react-bootstrap";
import Room from "../Room/Room";
import { useState } from "react";
import HomeModal from "./HomeModal";
import ReportModal from "./ReportModal";

function Home({ room, reports, setReports }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [currentReportRoom, setCurrentReportRoom] = useState(null); // 신고 대상 방

  const handleReportSubmit = (reason) => {
    setReports([...reports, { roomId: currentReportRoom, reason }]);
    setShowReport(false);
  };

  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          {room.map((oneRoom) => (
            <Col
              key={oneRoom.id}
              className="text-center"
              style={{ padding: 0 }}
              md={4}
              sm={6}
            >
              <Room
                className="room"
                style={{ padding: "10px" }}
                oneRoom={oneRoom}
                onSelect={() => setSelectedId(oneRoom.id)}
                onReport={() => {
                  setCurrentReportRoom(oneRoom.id); // ✅ 여기서 현재 방 id 저장
                  setShowReport(true);
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <HomeModal
        show={selectedId !== null}
        onHide={() => setSelectedId(null)}
        roomId={selectedId}
        onReport={(roomId) => {
          setCurrentReportRoom(roomId);
          setShowReport(true);
        }}
      />
      <ReportModal
        show={showReport}
        onHide={() => setShowReport(false)}
        onSubmit={handleReportSubmit}
      />
    </>
  );
}

export default Home;
