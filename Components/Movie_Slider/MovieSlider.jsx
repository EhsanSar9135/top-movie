import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./MovieSlider.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";

const MovieSlider = () => {
   return (
      <Swiper freeMode={true} slidesPerView={6} spaceBetween={10}>
         <SwiperSlide>
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
         </SwiperSlide>
      </Swiper>
   );
};

export default MovieSlider;
