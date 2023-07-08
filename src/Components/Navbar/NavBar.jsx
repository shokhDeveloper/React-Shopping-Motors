import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return(
        <nav className="nav_bottom">
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