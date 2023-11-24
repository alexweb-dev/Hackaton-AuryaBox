import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import c1 from "../Pictures/c1.png";
import c2 from "../Pictures/c2.png";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Navigation]);

const Slider = () => {
  return (
    <div className="reveveur">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        Keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {""}
          <img src="https://picsum.photos/images" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          {""}
          <img src={c1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          {""}
          <img src= {c2} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

// npm i swiper