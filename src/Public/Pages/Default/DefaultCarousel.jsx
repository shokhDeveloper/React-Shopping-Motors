import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const DefaultCarousel = ({array, className}) => {
    return(
        <Swiper className={className} 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {array?.map(item => {
            return(
                <SwiperSlide >
                    <img src={item} alt="" />
                </SwiperSlide>
            )
        })}
      </Swiper>
    ) 

}