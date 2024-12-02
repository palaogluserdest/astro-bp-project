import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Slide } from "../Slider.astro";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss";

type SliderComponentProps = {
  data: Slide[];
};

const SliderComponent: FC<SliderComponentProps> = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <SliderCard img={item.image} title={item.title} link={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderComponent;
