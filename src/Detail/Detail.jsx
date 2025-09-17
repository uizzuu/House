import data from "../Data/data";
import { Container } from "react-bootstrap";
import "./Detail.css";

function Detail({ id }) {
  const room = data.find((item) => item.id === parseInt(id));

  if (!room) {
    return <h2>존재하지 않는 방입니다.</h2>;
  }

  return (
    <>
      <h2>{room.title}</h2>
      <h5>{room.content}</h5>
      <h5>가격: {room.price.toLocaleString()}원</h5>
      <img src={room.image} alt={room.title} width="100%" />
    </>
  );
}

export default Detail;
