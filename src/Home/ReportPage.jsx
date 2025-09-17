import { Container } from "react-bootstrap";

function ReportPage({ reports, rooms }) {
  return (
    <Container style={{ marginTop: "40px" }}>
      <h2>신고된 매물 목록</h2>
      {reports.length === 0 ? (
        <p>신고된 매물이 없습니다.</p>
      ) : (
        reports.map((report, index) => {
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
              <p>신고 사유: {report.reason}</p>
            </div>
          );
        })
      )}
    </Container>
  );
}

export default ReportPage;
