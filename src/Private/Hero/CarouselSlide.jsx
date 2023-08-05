import { SwiperSlide } from "swiper/react"
import { Like } from "../../Components/Like"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { KorzinaBtn } from "../../Settings"
import Korzina from "../../Settings/assets/images/Korzina.png"
export const CarouselSlide = ({image, apperence, index}) => {
    const [like, setLike] = useState(false)
    return(
        <SwiperSlide>
            <div className="pop_slide__header">
              {index % 2 === 0 ? (
                <Like like={like} setLike={setLike} />
                ): (
                  <>
                <span className="sale">SALE</span>
                 <Like like={like} setLike={setLike} />
                </>
              )}
            </div>
            <div className="pop_slide__body">
            <img src={image} alt="Sumka" />
                <div className="pop_slide__shop">
                  <NavLink to={"/shop"}>посмотреть товар</NavLink>
                </div>
                {apperence ? (
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
              {apperence ? (
                null 
              ): (
              <KorzinaBtn style={{backgroundImage:`url(${Korzina})` }}/>
              )}
            </div>
        </SwiperSlide>
    )
}