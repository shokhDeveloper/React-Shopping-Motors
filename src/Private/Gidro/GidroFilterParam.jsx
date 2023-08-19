import { useEffect, useState } from "react";
import "./Gidro.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../Settings/Redux/Settings";
export const GidroFilterParam = () => {
  const { price_filter, bar_display, dvigitel_display } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.value.length) {
      dispatch(Action.setPrice(event.target.value));
    }
  };
  const handleDalsheGroup = (event) => {
    switch(event.target.id){
      case "moshnost":{
        dispatch(Action.setBarDisplay(!bar_display))
        dispatch(Action.setDvigitel(false))
      }break;
      case "dvigitel":{
        dispatch(Action.setDvigitel(!dvigitel_display))
        dispatch(Action.setBarDisplay(false))
      }
    }
  }
  const handleClick = (event) => {
    if(event.target.matches("#moshnost") || event.target.matches("#dvigitel")){
      console.log(false)
    }else{
      dispatch(Action.setDvigitel(false))
      dispatch(Action.setBarDisplay(false))
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  },[])
  return (
    <div className="filter__bar">
      <form action="https://echo.htmlacademy.ru" method="POST">
        <output>
          <UpOutlined />
          <span>
            {" "}
            <strong>Наличие</strong>{" "}
          </span>
        </output>
        <div className="filter_bar__checks">
          <label htmlFor="lich">
            <input type="checkbox" id="lich" name="lich" />
            <p>
              <small>В наличие</small>
            </p>
          </label>
          <label htmlFor="zakaz">
            <input type="checkbox" id="zakaz" />
            <p>
              <small>Под заказ</small>
            </p>
          </label>
        </div>
        <output>
          <UpOutlined />
          <span>
            {" "}
            <strong>Наличие</strong>{" "}
          </span>
        </output>
        <div className="filter_bar__checks">
          <label htmlFor="all">
            <input type="checkbox" checked={true} id="all" name="all" />
            <p>
              <small>Все</small>
            </p>
          </label>
          <label htmlFor="new">
            <input type="checkbox" id="new" />
            <p>
              <small>Новинки</small>
            </p>
          </label>
          <label htmlFor="aksi">
            <input type="checkbox" name="aksi" id="aksi" />
            <p>
              <small>Акции</small>
            </p>
          </label>
        </div>
        <output>
          <UpOutlined />
          <p>
            <strong>Цена = {price_filter}000 $</strong>
          </p>
        </output>
        <div className="filter_bar__checks range">
          <label htmlFor="price">
            <input
              type="range"
              defaultValue={price_filter}
              onChange={handleChange}
              name="price"
              id="price"
              min={100}
              max={500}
            />
          </label>
        </div>
        <div className="filter_bar__checks price__texts ">
          <p>
            {" "}
            <span>от</span> <small>100 000</small>
          </p>
          <p>
            <span>до</span><small>500 000</small>
          </p>
        </div>
        <div className="filter_bar__checks filter_by_static">
          <p>Мощность, л.с.</p>
          <p onClick={handleDalsheGroup} id="moshnost">90 {bar_display ? (
            <UpOutlined/>
          ): <DownOutlined/>} </p>
          <ul className="bar_group__filter" style={{display: bar_display ? "block": "none"}}>
            <li><button className="border-transparent">90</button></li>
            <li><button className="border-transparent">100</button></li>
            <li><button className="border-transparent">120</button></li>
            <li><button className="border-transparent">140</button></li>
          </ul>
        </div>
        <div className="filter_bar__checks filter_by_static">
          <p> Мощность двигателя, л.с..</p>
          <p onClick={handleDalsheGroup} id="dvigitel">90 {dvigitel_display ? (
            <UpOutlined/>
          ): <DownOutlined/>} </p>
          <ul className="bar_group__filter" style={{display: dvigitel_display? "block": "none"}}>
            <li><button className="border-transparent">90</button></li>
            <li><button className="border-transparent">100</button></li>
            <li><button className="border-transparent">120</button></li>
            <li><button className="border-transparent">140</button></li>
          </ul>
        </div>
      </form>
    </div>
  );
};
