import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { Btn } from "../../Settings"
import { HeroForm } from "./HeroForm"
import { useDispatch, useSelector } from "react-redux"
import { Action } from "../../Settings/Redux/Settings"

export const HeroLinks = () => {
    const selector = useSelector((state) => state.Reducer)
    const dispatch = useDispatch()
    return(
        <section className="moto">
            <div className="container">
                <div className="moto__items">
                    <div className="moto__links">
                        <NavLink onClick={() => dispatch(Action.setLink("nomeru")) } className={({isActive}) => isActive ? "link__active": "link"} to={"nomeru"}>Поиск по  номеру</NavLink>
                        <NavLink onClick={() => dispatch(Action.setLink("marke"))} className={({isActive}) => isActive ? "link__active": "link"} to={"/marke"}>Поиск по марке</NavLink>
                        <NavLink onClick={() => dispatch(Action.setLink("zbaniya_tovar"))} className={({isActive}) => isActive ? "link__active": "link"} to={"/zbaniya_tovar"}>Поиск по названию товара</NavLink> 
                    </div>
                    {selector?.link === "nomeru" ? (
                        <HeroForm text={"Поиск по номеру  "}/>
                    ): selector?.link === "marke" ? (
                        <HeroForm text={"Поиск по марке  "}/>
                    ): selector?.link === "zbaniya_tovar" ? (
                        <HeroForm text={"Поиск по названию товара"}/>
                    ): null}
                    <ul className="moto__cards">
                    {selector?.cardMoto?.map((item, index) => {
                        return(
                            <li className="moto__card" key={index}>
                                <div className="moto_card__text">
                                    <h3>{item.name}</h3>
                                    <p>Подробее</p>
                                </div>
                                <img src={item.image.oneX} srcSet={`${item.image.oneX} 1x, ${item.image.thueX}`} alt={"Moto"} />
                            </li>     
                        )
                    })}
                    </ul>
                </div>
            </div>

        </section>
    )
}