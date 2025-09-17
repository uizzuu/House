import { Container, Row, Col } from "react-bootstrap";
import Room from "../Room/Room";
import { useState } from "react";
import HomeModal from "./HomeModal";
import ReportModal from "./ReportModal";

function Home({ room }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          {room.map((oneRoom) => (
            <Col
              key={oneRoom.id}
              className="text-center"
              style={{padding:0}}
              md={4} sm={6}
            >
              <Room 
              className="room"
              style={{ padding: "10px" }}
              oneRoom={oneRoom} 
              onSelect={() => setSelectedId(oneRoom.id)}
              onReport={() => setShowReport(true)} />
            </Col>
          ))}
        </Row>
      </Container>

      <HomeModal
        show={selectedId !== null}
        onHide={() => setSelectedId(null)}
        roomId={selectedId}
      />
      <ReportModal
        show={showReport}
        onHide={() => setShowReport(false)}
      />
    </>
  );
}

export default Home;
