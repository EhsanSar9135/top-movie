import { Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../public/Assets/netflix.svg";
import classes from "./Layout.module.css";
import { Divider } from "antd";

const Layout = ({ children }) => {
   return (
      <>
         <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand className={classes.slider_brand}>
               <Image src={Logo} alt="Netflix" width={50} height={30} />
               Top Movies
            </Navbar.Brand>
            <Divider type="vertical" className={classes.divider} />
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
