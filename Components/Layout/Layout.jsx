import { Nav, Navbar, Button } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../public/Assets/Images/video-player.png";
import classes from "./Layout.module.css";
import { Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Layout = ({ children }) => {
   const { pathname } = useRouter();
   return (
      <>
         <Navbar className={classes.slider} bg="dark" variant="dark">
            <Navbar.Brand className={classes.slider_brand}>
               <Image
                  className={classes.image}
                  src={Logo}
                  alt="Netflix"
                  width={50}
                  height={30}
               />
               Top Movies
            </Navbar.Brand>
            <Divider type="vertical" className={classes.divider} />
            <Nav>
               <Link href="/" passHref={true}>
                  <Nav.Link active={pathname === "/"}>Home</Nav.Link>
               </Link>
               <Link href="/movies" passHref={true}>
                  <Nav.Link active={pathname.split("/")[1] === "movies"}>
                     Movies
                  </Nav.Link>
               </Link>
            </Nav>
            <Link href="/Auth" passHref={true}>
               <Button variant="light" className={classes.auth_btn}>
                  Login
               </Button>
            </Link>
         </Navbar>
         <div>{children}</div>
      </>
   );
};

export default Layout;
