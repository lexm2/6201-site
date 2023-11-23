import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, EffectFade, Navigation, Pagination } from "swiper/modules";

export default () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, EffectFade, Navigation, Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
