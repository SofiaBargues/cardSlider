// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HomeSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/9.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/10.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/12.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/13.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/14.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/15.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/16.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/17.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/18.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/19.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://days-of-code.vercel.app/images/20.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
