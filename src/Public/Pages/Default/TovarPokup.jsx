import { NavLink, Route, Routes } from "react-router-dom"
import "./DefaultSettingsLinks.scss"
import { DefaultTovars } from "./DefaultTovars";
export const TovarPokup = ({type}) => {
    const handleClick = () => {

    }
    return(
        <section className="default_tovars_pokup">
            <div className="container">
                <h2>С этим товаром покупают</h2>
                <ul className="default_tovars_links">
                    <li>
                        <NavLink onClick={handleClick} to={"/запчасти"} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>запчасти</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/моторы"} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>моторы</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/шины "} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>шины </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/электроника"} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>электроника</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/инструменты"} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>инструменты</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/аксессуары "} className={({isActive}) => isActive ? "default_tovars_link_active": "default_tovars_link"}>аксессуары </NavLink>
                    </li>
                </ul>
                {type ? (
                    <>
                        <DefaultTovars/>
                    </>            
                ):(
            
                <Routes>
                    <Route path="/" element={<DefaultTovars/>}/>
                    <Route path="/электроника" element={<DefaultTovars/>}/>

                </Routes>
                )}
            </div>
        </section>
    )
}