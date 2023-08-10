import "./Header.scss"
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Settings/assets/images/лого.svg";
import Location from "../../Settings/assets/images/Location.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Settings";
import { HeartOutlined, ShoppingCartOutlined , UserOutlined, LoginOutlined} from "@ant-design/icons/lib/icons";
import { NavBar } from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
export const Header = () => {
  const {token, korzina} = useSelector(state => state.Reducer)  
  const {items} = useCart()
  const navigate = useNavigate()
  const [location, setLocation] = useState({
        lat: null,
        long: null
    })
    const handleGetAdress = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {coords:{latitude, longitude}} = position
            setLocation({
                lat: latitude,
                long: longitude
            })
        })
    }
    useEffect(() => {
        handleGetAdress()
    },[])
    const handleNavigate = (event) => {
        if(event.target.classList.contains("likes_tovar_btn")){
          navigate("/likes__tovars")
        }else if(event.target.matches(".settings_akkaunt_btn")){
          navigate("/settings")
        }else if(event.target.closest(".shopping_cart_btn")){
          navigate("/shopping")

        }
    }
    useEffect(() => {
      console.log(korzina)
    },[korzina])
    return (    
    <header>
      <div className="container">
        <div className="header__items">
          <nav className="public__nav">
            <ul className="public_nav__ul">
              <li className="nav__list">
                <NavLink to={"/Магазины"} className="nav__link">
                  Магазины
                </NavLink>
              </li>
              <li className="nav__list">
                <NavLink to={"/Акции"} className="nav__link">
                  Акции
                </NavLink>
              </li>
              <li className="nav__list">
                <NavLink to={"/Доставка_и_оплата"} className="nav__link">
                  Доставка и оплата
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to={"/"} className="logo">
            <img src={Logo} alt="Logo " />
          </Link>
          <div className="header__adresss">

        {location?.lat  && location.long ?  (
            <NavLink to={`https://yandex.uz/maps/10334/samarkand/?ll=${location?.long?.toFixed(3)}801%2C${location?.lat?.toFixed(6)}&mode=search&sll=${location?.long?.toFixed(6)}%2C${location?.lat?.toFixed(6)}&text=${location?.lat?.toFixed(6)}%2C${location?.long?.toFixed(6)}&z=19.55`}>
                <img src={Location} alt="Location" />
                <span>Москва,  ул. Науки  25</span>
            </NavLink>
        ): null}
          </div>
          {token ? (
            <div className="header__settings">
                <button onClick={handleNavigate} className="likes_tovar_btn border-transparent ">
                    <span className="like_tovar__count">{items.length ? items.length: 0}</span>
                </button>
                <button onClick={handleNavigate} className="settings_akkaunt_btn border-transparent">
                </button>
                <button onClick={handleNavigate} className="shopping_cart_btn border-transparent">
                <span className="like_tovar__count">{korzina?.length ? korzina.length: null}</span>
                </button>
            </div>
          ): (
            <div className="header__sign">
                <NavLink to={"/sign-in"}>Sign-in <LoginOutlined/></NavLink>
            </div>
          )}
        </div>
        {token ? (
          <NavBar/>
        ) : null}
      </div>
    </header>
  );
};
