// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import SliderCard from "../components/SliderCard";
import fighter from "../../public/img/18type_icon/fighter.png";
import water from "../../public/img/18type_icon/water.png";
import evil from "../../public/img/18type_icon/evil.png";
import ground from "../../public/img/18type_icon/ground.png";
import fire from "../../public/img/18type_icon/fire.png";

const pickUpData = [
  {
    id: 447,
    url: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/97cf3f3e791c8c564e57a0dac30687d0.png",
    name: "リオル",
    class: "はもんポケモン",
    types: [
      {
        name: "かくとう",
        typeImg: fighter,
      },
    ],
  },
  {
    id: 658,
    url: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d78376a9336877d1f850f333602e7940.png",
    name: "ゲッコウガ",
    class: "しのびポケモン",
    types: [
      {
        name: "みず",
        typeImg: water,
      },
      {
        name: "あく",
        typeImg: evil,
      },
    ],
  },
  {
    id: 594,
    url: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d9cbc2a64ebde8da8a9b33c67a02044d.png",
    name: "ママンボウ",
    class: "かいほうポケモン",
    types: [
      {
        name: "みず",
        typeImg: water,
      },
    ],
  },
  {
    id: 322,
    url: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/d56b26cb6f7f5bc92447c5eccf3fdb2d.png",
    name: "ドンメル",
    class: "どんかんポケモン",
    types: [
      {
        name: "ほのお",
        typeImg: fire,
      },
      {
        name: "じめん",
        typeImg: ground,
      },
    ],
  },
];

const Slider = () => {
  return (
    <section className="w-screen md:max-w-screen-md lg:max-w-screen-lg">
      <div className="contaienr">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper py-10"
        >
          {pickUpData.map((pokemon) => (
            <SwiperSlide key={pokemon.id}>
              <SliderCard pokemon={pokemon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Slider;
