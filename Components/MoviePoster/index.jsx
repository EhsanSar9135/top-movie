import { Row, Col, Button } from "react-bootstrap";
import classNames from "classnames";
import Link from "next/link";
import classes from "./MoviePoster.module.css";
import { useState } from "react";

const MoviePoster = () => {
   // States
   const [dimmer, setDimmer] = useState(false);
   // Events
   const mouseEnterHandler = () => {
      setDimmer(true);
   };
   const mouseLeaveHandler = () => {
      setDimmer(false);
   };
   return (
      <Row className="w-100 text-center mt-5 mb-5">
         <Col onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <img
               className={dimmer && classes.banner_hover}
               src="/Assets/Banner/banner1.jpg"
               alt="banner1"
            />
            <div
               className={classNames(
                  classes.text_img_slider,
                  "text-center",
                  dimmer && classes.text_img_slider_hover
               )}
            >
               <h2 className="text-white">Title</h2>
               <p>Description</p>
               <Link href="/Movies/[slug]" as="/Movies/movie-1" passHref={true}>
                  <Button variant="success">Watch</Button>
               </Link>
            </div>
         </Col>
         <Col>
            <img src="/Assets/Banner/banner2.jpg" alt="banner2" />
         </Col>
         <Col>
            <img src="/Assets/Banner/banner1.jpg" alt="banner1" />
         </Col>
      </Row>
   );
};

export default MoviePoster;
