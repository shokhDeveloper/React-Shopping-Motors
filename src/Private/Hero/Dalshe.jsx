import { useSelector } from "react-redux";
import Swiper, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Like } from "../../Components/Like";
import { useEffect, useState } from "react";
import { KorzinaBtn } from "../../Settings";
import Korzina from "../../Settings/assets/images/Korzina.png";
import { NavLink } from "react-router-dom";
export const Dalshe = ({ params }) => {
  const { filterCar } = useSelector((state) => state.Reducer);
  const [like, setLike] = useState(false);
  useEffect(() => {
    Swiper.use([Navigation, A11y]);

    new Swiper(".pop__slider", {
      spaceBetween: 50,
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: (swiper) => console.log("Swiper initialized", swiper),
        slideChange: () => console.log("Slide changed"),
      },
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="pop__slider" id="dalshe_carousel">
          <div className="swiper-wrapper" style={{ marginTop: "1rem" }}>
            {(function (type) {
              if (filterCar) {
                if (Object.keys(filterCar).includes(type)) {
                  return (
                    <>
                      {filterCar[type]?.map((item, index) => {
                        const { id, apperence, name, image } = item;
                        const img =
                          typeof image === "object" && image?.oneX
                            ? image.oneX
                            : image;
                        return (
                          <SwiperSlide
                            key={id}
                            className="swiper-slide pop__slide"
                          >
                            <div className="pop_slide__header">
                              {index % 2 === 0 ? (
                                <Like
                                  item={item}
                                  like={like}
                                  setLike={setLike}
                                />
                              ) : (
                                <>
                                  <span className="sale">SALE</span>
                                  <Like like={like} setLike={setLike} />
                                </>
                              )}
                            </div>
                            <div className="pop_slide__body">
                              <img
                                width={300}
                                height={200}
                                src={img}
                                alt="Sumka"
                              />
                              <div className="pop_slide__shop">
                                <NavLink to={"/shop"}>посмотреть товар</NavLink>
                              </div>
                              {apperence ? (
                                <>
                                  <h3>Спасательное снаряжение</h3>
                                  <p>
                                    <strong>нет в наличии</strong>
                                  </p>
                                  <NavLink
                                    className={"pop_slide__link"}
                                    to={"/lichno"}
                                  >
                                    Сообщить о поступлении
                                  </NavLink>
                                </>
                              ) : (
                                <>
                                  <h3>Водонепроницаемый Рюкзак</h3>
                                  <h3>9 800 ₽</h3>
                                </>
                              )}
                            </div>
                            <div className="pop_slide__footer">
                              {apperence ? null : (
                                <KorzinaBtn
                                  style={{ backgroundImage: `url(${Korzina})` }}
                                />
                              )}
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </>
                  );
                }
              }
            })(params)}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </>
  );
};
