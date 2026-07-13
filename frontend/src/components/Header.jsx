import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  const logoutHandler = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <header>

      <Navbar bg="success" variant="dark" expand="lg">

        <Container>


          <LinkContainer to="/">
            <Navbar.Brand>
              🐾 Pomozi krznenim prijateljima da pronađu svoj dom!
            </Navbar.Brand>
          </LinkContainer>



          <Nav className="ms-auto">


            <LinkContainer to="/">
              <Nav.Link>
                Početna
              </Nav.Link>
            </LinkContainer>



            <LinkContainer to="/animals">
              <Nav.Link>
                Životinje
              </Nav.Link>
            </LinkContainer>



            {user ? (

              <NavDropdown
                title={`👤 ${user.name}`}
                id="user-menu"
              >
                {user.isAdmin && (

               <NavDropdown.Item 
               onClick={() => navigate("/admin")}
               >
               🐾 Admin panel
               </NavDropdown.Item>

              )}


                <NavDropdown.Item onClick={() => navigate("/profile")}>
    Moj profil
</NavDropdown.Item>


{!user.isAdmin && (

    <NavDropdown.Item onClick={() => navigate("/myrequests")}>
        Moji zahtevi 🐾
    </NavDropdown.Item>

)}


<NavDropdown.Divider />




<NavDropdown.Item onClick={logoutHandler}>
    Odjavi se
</NavDropdown.Item>

              </NavDropdown>


            ) : (

              <>

                <LinkContainer to="/login">
                  <Nav.Link>
                    Prijava
                  </Nav.Link>
                </LinkContainer>



                <LinkContainer to="/register">
                  <Nav.Link>
                    Registracija
                  </Nav.Link>
                </LinkContainer>

              </>

            )}


          </Nav>


        </Container>

      </Navbar>


    </header>

  );

}


export default Header;