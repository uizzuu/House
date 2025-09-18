import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ReportPage({ reports, rooms }) {
  const [sortedReports, setSortedReports] = useState([]);
  const [sortDirection, setSortDirection] = useState("desc"); // 기본 최신순

  // reports가 바뀌면 기본 정렬 적용
  useEffect(() => {
    const sorted = [...reports].sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    setSortedReports(sorted);
    setSortDirection("desc");
  }, [reports]);

  // 정렬 버튼 클릭
  const toggleSort = () => {
    const direction = sortDirection === "desc" ? "asc" : "desc";
    const sorted = [...sortedReports].sort((a, b) => {
      if (direction === "asc") {
        return (
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
      } else {
        return (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      }
    });
    setSortedReports(sorted);
    setSortDirection(direction);
  };

  // 초기화 버튼 클릭 시
  const resetSort = () => {
    const sorted = [...reports].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    setSortedReports(sorted); // 원본 reports로 초기화
    setSortDirection("desc"); // 기본 최신순
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <h2>신고된 매물 목록</h2>

      {reports.length > 0 && (
        <div
          style={{ marginTop: "30px", marginBottom: "20px", textAlign: "left" }}
        >
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={resetSort}
            style={{ marginRight: "10px" }}
          >
            초기화
          </Button>
          <Button variant="outline-primary" size="sm" onClick={toggleSort}>
            신고 시간{" "}
            <span style={{ fontWeight: 600 }}>
              {sortDirection === "asc" ? "오래된순" : "최신순"}
            </span>
          </Button>
        </div>
      )}

      {reports.length === 0 ? (
        <p>신고된 매물이 없습니다.</p>
      ) : (
        sortedReports.map((report, index) => {
          // roomId를 숫자로 변환해서 검색
          const room = rooms.find(r => r.id === Number(report.roomId));

          return (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <h5>{room ? room.title : "알 수 없는 방"}</h5>
              <p>신고 시간: {report.timestamp}</p>
              <p>신고 사유: {report.reason}</p>
            </div>
          );
        })
      )}
    </Container>
  );
}

export default ReportPage;
