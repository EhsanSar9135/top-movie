import { Nav, Navbar } from "react-bootstrap";

const Layout = ({ children }) => {
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Top Movies</Navbar.Brand>
            <Nav>
               <Nav.Link>Home</Nav.Link>
               <Nav.Link>Movies</Nav.Link>
            </Nav>
         </Navbar>
         <div>{children}</div>
      </>
   );
};

export default Layout;
