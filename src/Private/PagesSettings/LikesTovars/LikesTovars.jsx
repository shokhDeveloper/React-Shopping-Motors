import "./LikeTovars.scss";
import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useCart } from "react-use-cart"
import { Btn } from "../../../Settings";

export const LikesTovars = () => {
    const navigate = useNavigate()
    const {items, removeItem} = useCart()
    const handleKey = (event) => {
        if(event.keyCode === 27){
            navigate(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleKey)
        return () => window.removeEventListener("keyup", handleKey)
    },[])
    const handleDeleteLikeTovar = (id) => {
      removeItem(id)

    }
    return(
        <section className="like__tovars">
            <div className="container">
                {items?.length ?( 
                  <div className="like_tovars__items">
                  {items?.map(item => {
                      const {id, apperence, name, image } = item;
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
                              <div className="pop_slide__footer">
                                <Btn onClick={() => handleDeleteLikeTovar(id)} className="kupit_btn" variant={"danger"}>
                                  Delete
                                </Btn>  
                              </div>
                          </div>
                      )
                  })}
                  </div>
                ): <h1 className="error">Tovarlar saqlab qolinmagan</h1>}
                
            </div>
        </section>
    )
}