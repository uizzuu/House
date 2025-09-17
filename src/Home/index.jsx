import {Container, Row, Col} from 'react-bootstrap';
import Room from "../Room";

function Home({room}) {
  return (
    <>
      <Container>
        <Row>
          {room.map((oneRoom, _) => {
            return (
              <Col key={oneRoom.id} className="text-center" style={{marginTop:"50px"}}>
                {/* Product 콤포넌트 자리 */}
                <Room oneRoom={oneRoom} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;