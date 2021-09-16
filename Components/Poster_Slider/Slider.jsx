import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import classes from "./Slider.module.css";

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
               <span className={classes.text_img_slider}>
                  Slider Text Number 1
               </span>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className={classes.img_slider}
                  src="/Assets/Images/Slider/slider_2.png"
                  alt="slide-2"
                  layout="fill"
               />
               <span className={classes.text_img_slider}>
                  Slider Text Number 2
               </span>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className={classes.img_slider}
                  src="/Assets/Images/Slider/slider_3.jpg"
                  alt="slide-3"
                  layout="fill"
               />
               <span className={classes.text_img_slider}>
                  Slider Text Number 3
               </span>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className={classes.img_slider}
                  src="/Assets/Images/Slider/slider_4.jpg"
                  alt="slide-4"
                  layout="fill"
               />
               <span className={classes.text_img_slider}>
                  Slider Text Number 4
               </span>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slider;
