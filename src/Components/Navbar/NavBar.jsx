import { NavLink, useLocation } from "react-router-dom"

export const NavBar = () => {
    const location = useLocation()
    return(
        <nav className="nav_bottom" style={{display: location.pathname === "/settings" || location.pathname === "/likes__tovars" ? "none": null}}>
            <ul>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Квадроциклы"}>Квадроциклы</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Катера"}>Катера</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"}   to={"/Гидроциклы"}>Гидроциклы</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Лодки"}>Лодки</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Вездеходы"}>Вездеходы</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Снегоходы"}>Снегоходы</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Двигатели"}>Двигатели</NavLink>
                </li>
                <li className="nav__list">
                    <NavLink className={({isActive}) => isActive ? "active_page": "page"} to={"/Запчасти"}>Запчасти</NavLink>
                </li>
            </ul>
        </nav>
    )
}