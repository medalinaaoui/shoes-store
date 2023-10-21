import { Story } from "../components/index";
import { stories } from "../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Topstories = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    // When screen width is greater than or equal to 1024px
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <section className=" py-6 px-12">
      <h1 className="  text-one md:text-6xl text-xl font-bold mb-6">
        {stories.title}
      </h1>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        freeMode={true}
        navigation
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {stories?.news?.map((story, i) => (
          <SwiperSlide key={i}>
            <Story story={story} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Topstories;
