import { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import classNames from "classnames";
import { memo } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AutoplayOptions,
  NavigationOptions,
  PaginationOptions,
  SwiperModule,
} from "swiper/types";

interface Props {
  slides: React.ReactNode[] | string[];
  swiperClassName?: string;
  modules?: SwiperModule[];
  direction?: "horizontal" | "vertical";
  speed?: number;
  effect?:
    | "slide"
    | "fade"
    | "cube"
    | "coverflow"
    | "flip"
    | "creative"
    | "cards";
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  slidesPerGroup?: number;
  slidesPerGroupSkip?: number;
  slidesPerGroupAuto?: boolean;
  centeredSlides?: boolean;
  centeredSlidesBounds?: boolean;
  loop?: boolean;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  slideClass?: string;
  slideActiveClass?: string;
  autoplay?: AutoplayOptions | boolean;
  navigation?: NavigationOptions | boolean;
  pagination?: PaginationOptions | boolean;
}
const Carousel: React.FC<Props> = ({
  slides,
  direction,
  pagination,
  loop,
  modules,
  slideClass,
  breakpoints,
  swiperClassName,
  navigation,
  autoplay,
  spaceBetween,
}) => {
  return (
    <Swiper
      direction={direction}
      pagination={pagination}
      breakpoints={breakpoints}
      navigation={
        navigation
          ? {
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }
          : false
      }
      modules={modules}
      loop={loop}
      className={classNames("pb-8", swiperClassName)}
      autoplay={autoplay}
      spaceBetween={spaceBetween}
    >
      {slides.map((item, index) => (
        <SwiperSlide className={slideClass} key={index}>
          {item}
        </SwiperSlide>
      ))}
      {navigation ? (
        <>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-5 swiper-button-prev-custom bg-primary shadow-tertiaryShadow rounded-[8px] text-white w-fit p-2.5 group">
            <HiArrowNarrowLeft className="text-white filter drop-shadow-primaryShadow" />
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 z-5 swiper-button-next-custom bg-primary shadow-tertiaryShadow rounded-[8px] text-white w-fit p-2.5 group">
            <HiArrowNarrowRight className="text-white filter drop-shadow-primaryShadow" />
          </div>
        </>
      ) : (
        ""
      )}
    </Swiper>
  );
};
export default memo(Carousel);
