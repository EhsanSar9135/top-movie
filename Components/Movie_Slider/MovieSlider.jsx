import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import classes from "./MovieSlider.module.css";
import { Card } from "react-bootstrap";

const MovieSlider = () => {
   return (
      <Swiper
         className={classes.movie_slider}
         freeMode={true}
         slidesPerView={6}
         spaceBetween={10}
      >
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_1.jpg" alt="movieSlide-1" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_2.jpg" alt="movieSlide-2" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_3.jpg" alt="movieSlide-3" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_4.jpg" alt="movieSlide-4" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_5.jpg" alt="movieSlide-5" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_6.jpg" alt="movieSlide-6" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_1.jpg" alt="movieSlide-1" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_2.jpg" alt="movieSlide-2" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_3.jpg" alt="movieSlide-3" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_4.jpg" alt="movieSlide-4" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_5.jpg" alt="movieSlide-5" />
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card>
               <Card.Img src="/Assets/Movies/slider_6.jpg" alt="movieSlide-6" />
            </Card>
         </SwiperSlide>
      </Swiper>
   );
};

export default MovieSlider;
