// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";


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
          <SwiperSlide ><div className="w-64 h-64 bg-red-500">aaaaaaa</div></SwiperSlide>
          <SwiperSlide ><div className="w-64 h-64 bg-red-300">aaaaaaa</div></SwiperSlide>
          <SwiperSlide ><div className="w-64 h-64 bg-red-400">aaaaaaa</div></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
