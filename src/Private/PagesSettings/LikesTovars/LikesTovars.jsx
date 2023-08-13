import "./LikeTovars.scss";
import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useCart } from "react-use-cart"

export const LikesTovars = () => {
    const navigate = useNavigate()
    const {items} = useCart()
    const handleKey = (event) => {
        if(event.keyCode === 27){
            navigate(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleKey)
        return () => window.removeEventListener("keyup", handleKey)
    },[])
    console.log(items)
    return(
        <section className="like__tovars">
            <div className="container">
                <div className="like_tovars__items">
                {items?.map(item => {
                    const { apperence, name, image } = item;
                    const img = typeof image === "object" && image?.oneX ? image.oneX : image
                    return(
                        <div className="pop__slide">
                          
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
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}