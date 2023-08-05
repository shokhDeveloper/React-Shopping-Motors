import { NavLink } from "react-router-dom";
import { KorzinaBtn, Link } from "../../Settings";
import { PopTovarCarousel } from "./PopTovarCarousel";
import { useDispatch, useSelector } from "react-redux";
import Swiper, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { CarouselSlide } from "./CarouselSlide";
import { Like } from "../../Components/Like";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Korzina from "../../Settings/assets/images/Korzina.png";
import { Action } from "../../Settings/Redux/Settings";
export const PopTovar = () => {
  const { carArray, objectNumberCreateCar } = useSelector((state) => state.Reducer);
  const [like, setLike] = useState(false)
  const dispatch = useDispatch()
  return (
    <section className="pop__tovar">
      <div className="container">
        <h1>Популярные товары</h1>
        <div className="pop_tovar__links">
          <NavLink
            to={"/запчасти"}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            запчасти
          </NavLink>
          <NavLink
            to={"/моторы"}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            моторы
          </NavLink>
          <NavLink
            to={"/шины "}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            шины{" "}
          </NavLink>
          <NavLink
            to={"/электроника"}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            электроника
          </NavLink>
          <NavLink
            to={"/инструменты"}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            инструменты
          </NavLink>
          <NavLink
            to={"/аксессуары "}
            className={({ isActive }) =>
              isActive ? "link_default__active" : "link__default"
            }
          >
            аксессуары{" "}
          </NavLink>
        </div>
        <PopTovarCarousel />
      </div>
    </section>
  );
};
