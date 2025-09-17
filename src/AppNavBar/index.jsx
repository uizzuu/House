import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar , NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./AppNavBar.css";

function AppNavBar(){

  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>House</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/');}}>Main</Nav.Link>
              <Nav.Link>로그인</Nav.Link>
              <Nav.Link onClick={()=>navigate('/')}>회원가입</Nav.Link>
              {/* <NavDropdown title="Info" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>navigate('/')}>Member</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>navigate('/')}>Location</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default AppNavBar;