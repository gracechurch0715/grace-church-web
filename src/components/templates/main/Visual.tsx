import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import COLORS from "components/common/colors";

const Visual = () => {
  return (
    <SwiperVisual
      pagination={{ type: "progressbar" }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      loop
    >
      <SwiperSlide>
        <img
          src="https://onedrive.live.com/embed?resid=C307F97E37B29271%21113&authkey=%21AAit7S3rqkF7-Us&width=1920&height=1000"
          alt=""
          className="lg:hidden"
        />
        <img
          src="https://onedrive.live.com/embed?resid=C307F97E37B29271%21120&authkey=%21AGYiiK719ObB3iQ&width=1023&height=840"
          alt=""
          className="hidden lg:block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://onedrive.live.com/embed?resid=C307F97E37B29271%21114&authkey=%21ACezNXRukG0s_VM&width=1920&height=1000"
          alt=""
          className="lg:hidden"
        />
        <img
          src="https://onedrive.live.com/embed?resid=C307F97E37B29271%21119&authkey=%21APyrKw3h2jlbQXw&width=1023&height=840"
          alt=""
          className="hidden lg:block"
        />
      </SwiperSlide>
    </SwiperVisual>
  );
};

const SwiperVisual = styled(Swiper)`
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: ${COLORS.PRIMARY_LIGHT};
  }
`;

export default Visual;
