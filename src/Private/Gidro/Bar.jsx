import "./Gidro.scss"
import { NavLink, Route, Routes } from "react-router-dom"
import { GidroFilterParam } from "./GidroFilterParam"

export const Bar = () => {
    return(
        <>
            <div className="gidro_filter__links">
                <NavLink className={({isActive}) => isActive ? "link_default__active" : "not__active"} to={"Параметры"}>Параметры</NavLink>
                <NavLink className={({isActive}) => isActive ? "link_default__active" : "not__active"}  to={"по-марке"}>по марке</NavLink>
            </div>
            <div className="gidro_filter_bar__items">
               <Routes>
                    <Route index element={<GidroFilterParam/>}/>
                    <Route path="/Параметры/*" element={<GidroFilterParam/>}/>
                    <Route path="/по-марке" element={<h1>Marke</h1>}/>
                </Routes> 
            </div>
        </>   
    )
}