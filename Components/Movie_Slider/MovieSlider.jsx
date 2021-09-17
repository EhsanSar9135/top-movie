import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./MovieSlider.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";

const MovieSlider = () => {
   return (
      <Swiper freeMode={true} slidesPerView={6} spaceBetween={10}>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-1">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_1.jpg"
                     alt="movieSlide-1"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-2">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_2.jpg"
                     alt="movieSlide-2"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-3">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_3.jpg"
                     alt="movieSlide-3"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-4">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_4.jpg"
                     alt="movieSlide-4"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-5">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_5.jpg"
                     alt="movieSlide-5"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-6">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_6.jpg"
                     alt="movieSlide-6"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-7">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_1.jpg"
                     alt="movieSlide-1"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-8">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_2.jpg"
                     alt="movieSlide-2"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-9">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_3.jpg"
                     alt="movieSlide-3"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-10">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_4.jpg"
                     alt="movieSlide-4"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-11">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_5.jpg"
                     alt="movieSlide-5"
                  />
               </Card>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/Movies/[slug]" passHref={true} as="/Movies/movie-12">
               <Card className={classes.card}>
                  <Card.Img
                     src="/Assets/Images/Movies/slider_6.jpg"
                     alt="movieSlide-6"
                  />
               </Card>
            </Link>
         </SwiperSlide>
      </Swiper>
   );
};

export default MovieSlider;
