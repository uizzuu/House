import { useParams } from "react-router-dom";
import data from "../Data/data";
import { Container } from "react-bootstrap";


function Detail() {
  const { id } = useParams();
  const room = data.find((item) => item.id === parseInt(id));

  if (!room) {
    return <h2>존재하지 않는 방입니다.</h2>;
  }

  return (
    <Container style={{ marginTop: "50px" }}>
      <h2>{room.title}</h2>
      <h4>{room.content}</h4>
      <img src={room.image} alt={room.title} width="100%" />
      <p>가격: {room.price.toLocaleString()}원</p>
    </Container>
  );
}

export default Detail;
