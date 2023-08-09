import "./Hero.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "../../Settings/assets/images/CarouselImg.jpg";
import CarouselImgaAddText from "../../Settings/assets/images/CarouselImgAddText.jpg";
import Aksiya_Img from "../../Settings/assets/images/Aksiya_Img.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { HeroLinks } from "./HeroLinks";
import { TovarPokup } from "../../Public/Pages/Default/TovarPokup";
import { PopTovar } from "./PopTovar";
import { Dalshe } from "./Dalshe";
import { useSelector } from "react-redux";
import { Artickle } from "./Artickle";
import {DefaultFooter} from "../../Public/Pages/Default/DefaultFooter"
export const Hero = () => {
  const date = new Date();
  const {filterCar} = useSelector((state) => state.Reducer)
  const [state, setState] = useState([
    CarouselImgaAddText,
    CarouselImg,
    CarouselImgaAddText,
    CarouselImg,
    CarouselImgaAddText,
  ]);
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero__items">
          <Swiper
            className="hero_items__swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => swiper}
            onSlideChange={() => "Helo"}
          >
            {state?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="hero_aksiya">
            <div className="hero__card">
              <div className="card__header">
                <div className="aksiya">акция</div>
                <div className="card_header__text">
                  <h2 className="price">190 000 P</h2>
                  <h3 className="before_price">
                    <del>20 000 P</del> 
                  </h3>
                </div>
              </div>
              <div className="card__body">
                <img src={Aksiya_Img} alt="" />
                <h3>
                  Лодочный мотор{" "}
                  <span className="card_body__name">Suzuki DF9.9BRS</span>
                </h3>
              </div>
              <div className="card_footer">
                <h4>Акция действует до</h4>
                <h4>{date.toLocaleString().substring(0, 10)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HeroLinks/>
    <PopTovar/>       
    {(function(filter){
      if(filter){
        let keys = Object.keys(filter)
        return(
          keys?.map(item => {
            return <Dalshe params={item}/>})
        )
      }
    }(filterCar))}
    <Artickle/>
    <TovarPokup type={true}/>
    <DefaultFooter type={true}/>
    </>
  );
};
