import { Container, Row, Col, Button } from "react-bootstrap";
import Room from "../Room/Room";
import { useState } from "react";
import HomeModal from "./HomeModal";
import ReportModal from "./ReportModal";

function Home({ room, reports, setReports }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [currentReportRoom, setCurrentReportRoom] = useState(null); // 신고 대상 방

  // 정렬 상태 관리
  const [sortedRooms, setSortedRooms] = useState([...room]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const handleReportSubmit = (reason, date, roomId) => {
    const newReport = {
      roomId: roomId,
      reason,
      timestamp: formatDate(date), // 사람이 읽을 수 있는 날짜/시간
    };
    setReports([...reports, newReport]);
    setSelectedId(null);
    setCurrentReportRoom(null);
  };

  // 정렬 함수
  const sortRooms = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sorted = [...sortedRooms].sort((a, b) => {
      if (key === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return direction === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
    setSortedRooms(sorted);
    setSortConfig({ key, direction });
  };

  // 초기화 버튼
  const resetSort = () => {
    setSortedRooms([...room]);
    setSortConfig({ key: null, direction: "asc" });
  };

  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={resetSort}
            style={{ marginRight: "10px" }}
          >
            초기화
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => sortRooms("price")}
            style={{ marginRight: "10px" }}
          >
            가격{" "}
            {sortConfig.key === "price"
              ? sortConfig.direction === "asc"
                ? "↓"
                : "↑"
              : ""}
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => sortRooms("title")}
            style={{ marginRight: "10px" }}
          >
            제목{" "}
            {sortConfig.key === "title"
              ? sortConfig.direction === "asc"
                ? "↓"
                : "↑"
              : ""}
          </Button>
        </div>

        <Row>
          {sortedRooms.map((oneRoom) => (
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
                  setCurrentReportRoom(oneRoom.id); // 여기서 현재 방 id 저장
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
        onSubmit={(reason, date) => handleReportSubmit(reason, date, currentReportRoom)}
      />
    </>
  );
}

export default Home;
