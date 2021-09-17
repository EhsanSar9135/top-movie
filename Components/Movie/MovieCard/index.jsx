import Link from "next/link";
import { Card } from "react-bootstrap";
import classes from "./MovieCard.module.css";

const MovieCard = () => {
   return (
      <div className="text-center">
         <Link href="/Movies/[slug]" as="/Movies/movie-1" passHref={true}>
            <div className={classes.card_font_hover}>
               <Card className={classes.card}>
                  <Card.Img
                     className={classes.img_shadow}
                     src="/Assets/Images/Movies/slider_1.jpg"
                     alt="slider-1"
                  />
                  <p>Movie Name</p>
               </Card>
            </div>
         </Link>
      </div>
   );
};

export default MovieCard;
