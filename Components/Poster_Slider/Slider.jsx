import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import classes from "./Slider.module.css";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
   return (
      <>
         <Swiper
            className={classes.poster_slider}
            navigation
            pagination={{ clickable: true }}
         >
            <SwiperSlide>
               <Image
                  className={classes.img_slider}
                  src="/Assets/Images/Slider/slider_1.png"
                  alt="slide-1"
                  layout="fill"
               />
               <div
                  className={classNames(classes.text_img_slider, "text-center")}
               >
                  <h2 className="text-white">Title</h2>
                  <p>Description</p>
                  <Link
                     href="/Movies/[slug]"
                     as="/Movies/movie-1"
                     passHref={true}
                  >
                     <Button variant="success">Watch</Button>
                  </Link>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slider;
