// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";

import SliderCard from "../components/SliderCard";

const Slider = () => {
  return (
    <section className="w-full mx-auto">
      <div className="contaienr">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          loop={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderCard
              url="https://zukan.pokemon.co.jp/zukan-api/up/images/index/d78376a9336877d1f850f333602e7940.png"
              name="ゲッコウガ"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              url="https://zukan.pokemon.co.jp/zukan-api/up/images/index/97cf3f3e791c8c564e57a0dac30687d0.png"
              name="リオル"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              url="https://zukan.pokemon.co.jp/zukan-api/up/images/index/c49f4aa1cdfa011472090a8a2eda5103.png"
              name="モクロー"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Slider;
