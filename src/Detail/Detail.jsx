import data from "../Data/data";
import { Container } from "react-bootstrap";
import "./Detail.css";

function Detail({ id, onReport }) {
  const room = data.find((item) => item.id === parseInt(id));

  if (!room) {
    return <h2>존재하지 않는 방입니다.</h2>;
  }

  const tags = room.content.split(",").map((tag) => tag.trim());

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{room.title}</h2>
        <button
          className="btn btn-danger"
          onClick={() => onReport && onReport(room.id)}
        >
          허위매물 신고
        </button>
      </div>
      <h5>가격: {room.price.toLocaleString()}원</h5>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          margin: "10px 0",
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "#f0f0f0",
              padding: "10px 16px",
              borderRadius: "50px",
              margin: "16px 0 20px",
              fontSize: "0.8rem",
              fontWeight: "600",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
      <img src={room.image} alt={room.title} width="100%" />
    </>
  );
}

export default Detail;
