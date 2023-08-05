import "./DefaultSettingsLinks.scss"
import React, { useState } from "react";
import { Like } from "../../../Components/Like";
import { NavLink } from "react-router-dom";
import { Btn } from "../../../Settings";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
export const DefaultTovars = () => {
  const [like, setLike] = useState(false);
  const {tovars, token} = useSelector((state) => state.Reducer)
  return (
    <div className="default_tovars">
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         onSwiper={(swiper) => swiper}
      >
        {tovars?.map((item, index) => {
          return(
            <SwiperSlide key={index} className="default_tovar">
              <div style={{width: "100%"}}>
            <div className="default_tovar_header">
              {(index) % 2 === 0 ? (
                <span>SALE</span>
              ): null}
              <Like like={like} item={item} setLike={setLike} key={index} />
            </div>
            <div className="default_tovar_body">
              <img
                width={200}
                height={200}
                src={item.image.oneX}
                srcSet={`${item.image.oneX} 1x, ${item.image.thueX} 2x`}
                className="default_tovar__image"
                alt="Radio"
              />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              {(index+1) % 2 === 0 ? (
              <React.Fragment>
              <NavLink to={token ? "/tovar": `/sign-in`}>Сообщить о поступлении</NavLink>
              <Btn className="kupit_btn" style={{ padding: "0.5rem 0.7rem" }}>
                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
              </Btn>
              </React.Fragment>
              ): null}
            </div>
          </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};
