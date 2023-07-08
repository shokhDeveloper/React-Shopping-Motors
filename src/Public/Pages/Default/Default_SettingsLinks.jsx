import { DefaultData } from "./DefaultData"
import { DefaultLinksRoute } from "./DefaultLinksRoute"
import "./DefaultSettingsLinks.scss"
import { NavLink, Route, Routes, useLocation } from "react-router-dom"

export const DefaultSettingsLinks = () => {
    return(
        <>
        <section className="default_settings_links">
            <div className="container">
                <ul className="default_settings_links_ul">
                    <li><NavLink to={"О-товаре"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>О товаре</NavLink></li>
                    <li>
                        <NavLink to={"Характеристики"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Характеристики</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Отзывы"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Отзывы</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Самовывоз"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Самовывоз</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Доставка"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Cервис"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Cервис</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Гарантия"} className={({isActive}) => isActive ? "default_settings_links_active_page": "default_settings_links_page"}>Гарантия</NavLink>
                    </li>
                </ul>
                <DefaultData/>
{/*                 
                <Routes>
                    <Route index element={<DefaultData/>}/>
                    <Route path="/Самовывоз" element={<DefaultData/>}/>
                </Routes> */}
                {/* <DefaultLinksRoute/> */}

            </div>
        </section>

        </>
    )
}