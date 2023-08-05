
import Korzina from "../../Settings/assets/images/Korzina.png"
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Like } from '../../Components/Like';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HeIsBtn, KorzinaBtn } from "../../Settings";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Action } from "../../Settings/Redux/Settings";
export const PopTovarCarousel = () => {
    const [like, setLike] = useState(false)
    const {carArrayImg, filterCar} = useSelector((state) => state.Reducer )
    const dispatch = useDispatch()
    const handleClick = async () => {
      const request = await axios.get(process.env.REACT_APP_SERVER + "/cardMoto")
      const response = await  request.data
      dispatch(Action.createCar(response))
    }
    return(
     <>
      <Swiper className='pop__slider'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() =>'slide change'}
      >
      {carArrayImg?.map((item, index) => {
        const {image} = item
        return(
          <SwiperSlide key={index} className='pop__slide'>
            <div className="pop_slide__header">
              {index % 2 === 0 ? (
                <Like item={item} index={index}  />
                ): (
                  <>
                <span className="sale">SALE</span>
                 <Like item={item} l />
                  </>
              )}
            </div>
            <div className="pop_slide__body">
            <img src={image} alt="Sumka" />
                <div className="pop_slide__shop">
                  <NavLink to={"/shop"}>посмотреть товар</NavLink>
                </div>
                {item.apperence ? (
                  <>
                  <h3>Спасательное
                  снаряжение</h3>
                  <p><strong>нет в наличии</strong></p>
                  <NavLink className={"pop_slide__link"} to={"/lichno"}>Сообщить о поступлении</NavLink>
                  </>
                ):
                <>
                <h3>Водонепроницаемый Рюкзак</h3>
                <h3>9 800 ₽</h3>
                </>
                }
            </div>
            <div className="pop_slide__footer">
              {item.apperence ? (
                null 
              ): (
              <KorzinaBtn style={{backgroundImage:`url(${Korzina})` }}/>
              )}
            </div>
        </SwiperSlide>
        )
      })}      
        </Swiper>
        {filterCar !== null ? (
          null
        ):(
        <div className="pop__heis">
        <HeIsBtn onClick={handleClick} className="border-transparent">Показать еще</HeIsBtn>
        </div>
        )}
     </>
    )
}