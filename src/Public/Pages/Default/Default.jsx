import { useState } from "react";
import Car from "../../../Settings/assets/images/Moto.png";
import Car_2 from "../../../Settings/assets/images/Moto_2.png";
import Car_3 from "../../../Settings/assets/images/Moto_3.png";
import Car_4 from "../../../Settings/assets/images/Moto_4.png";
import Car_5 from "../../../Settings/assets/images/Moto_5.png";
import { DefaultCarousel } from "./DefaultCarousel";
import { Like } from "../../../Components/Like";
import Chart_Img from "../../../Settings/assets/images/Chart_Img.png";
import Zvezda from "../../../Settings/assets/images/Zvezda.png";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Xaracter, Magazin } from "../../../Components";
import { Btn } from "../../../Settings";
import { DefaultSettingsLinks } from "./Default_SettingsLinks";
import { TovarPokup } from "./TovarPokup";
import { DefaultFooter } from "./DefaultFooter";
export const Default = () => {
  const [publicCarousel, setPublicCarousel] = useState([
    Car,
    Car_2,
    Car_3,
    Car_4,
    Car_5,
  ]);
  const [like, setLike] = useState(false);
  const [state, setState] = useState("/Характеристики")
  return (
    <>
    <section className="public__default">
      <div className="container">
        <div className="default__items">
          <DefaultCarousel array={publicCarousel} className="items__swiper" />
          <div className="items__text">
            <div className="item__card">
              <h2>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
              <p>
                <small>Код товара: 366666-2 </small>
              </p>
              <div className="items_text__images">
                <Like like={like} setLike={setLike} />
                <img src={Chart_Img} alt="" />
                <img src={Zvezda} alt="" />
              </div>
              <div className="items__links">
                <div className="item__template">
                <NavLink onClick={() => setState("/Характеристики")} className={({isActive}) => isActive ? "active__page": "item__page" } to={"Характеристики"}>Характеристики</NavLink>
                {state === "/Характеристики" ? (
                  <>
                    <Xaracter status={"default"}/>
                  </>
                ): state === "/Наличие_в_магазине" ? (
                    <Magazin status={"default"}/>
                ): null}
              
                </div>
                <div className="item__template">
                <NavLink onClick={() => setState("/Наличие_в_магазине")} className={({isActive}) => isActive ? "active__page": "item__page" } to={"Наличие_в_магазине"}>Наличие в магазине</NavLink>
                {state === "/Характеристики" ? (
                  <>  
                  <Xaracter status={"thue"}/>
                  </>
                ): state === "/Наличие_в_магазине" ? (
                  <Magazin status={"thue"}/>
                ): null}
                </div>
              </div>
               <div>
                <a className="pokazat" href="#Показать-еще">Показать еще</a>
                <Btn className="kupit_btn" style={{display: "block"}}>купить</Btn>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <DefaultSettingsLinks/>
    <TovarPokup/>  
    <DefaultFooter/>
    </> 
  );
};
