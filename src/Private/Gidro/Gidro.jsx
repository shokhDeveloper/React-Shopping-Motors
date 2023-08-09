import { NavLink } from "react-router-dom"
import { GidroFilter } from "./GidroFilter"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"

export const Gidro = () => {
    const [data, setData] = useState([])
    // const url = proc
    return(
        <section className="gidro">
            <div className="container">
                <div className="gidro__links">
                    <NavLink className={"link"} to={"/"}> Главная </NavLink>
                    <span className="link">{" > "}</span>
                    <NavLink className={({isActive}) => isActive ? "link__active": "link" } to={"/Гидроциклы"}>Гидроциклы</NavLink>
                </div>
                <GidroFilter/>
                {data?.map(item => {
                    return(
                        <img src={item.image?.ondeX ? item.image?.oneX: item.image } alt="Yana" />
                    )
                })}
            </div>
        </section>
    )
}