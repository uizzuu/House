import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar , NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import "./AppNavBar.css";

function AppNavBar(){

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("/"); // 현재 선택된 메뉴

  const handleClick = (path) => {
    navigate(path);      // 페이지 이동
    setActiveMenu(path); // 상태 업데이트 → 메뉴 색상 변경
  };

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>House</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link 
            onClick={() => handleClick("/")}
            className={activeMenu === "/" ? "active" : ""}>
              Main
              </Nav.Link>
              <Nav.Link 
            onClick={() => handleClick("/reports")}
            className={activeMenu === "/reports" ? "active" : ""}>
              신고목록
              </Nav.Link>
              <Nav.Link as={Link} to="/reports">로그인</Nav.Link>
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