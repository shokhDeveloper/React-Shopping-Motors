import { useEffect, useState } from "react";
import "./Gidro.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../Settings/Redux/Settings";
import { NavLink } from "react-router-dom";
import { Asistent, Btn } from "../../Settings";
import axios from "axios";
export const GidroFilterParam = () => {
  const {
    price_filter,
    bar_display,
    dvigitel_display,
    speed_display,
    model_display,
    filter_asistent,
    lich, zakaz,
    speed,
    dvigitel,
    max_speed,
    search, region,
    type_filter
  } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.value.length) {
      dispatch(Action.setPrice(event.target.value));
    }
  };
  const handleSub = async (event) => {
      event.preventDefault()
      try{
        const request = await axios.get(process.env.REACT_APP_SERVER + "/car", {
          params: {
            lich: lich ? lich: null,
            zakaz: zakaz ? zakaz : null,
            speed: speed ? speed : null,
            dvigitel: dvigitel ? dvigitel: null,
            max_speed: max_speed ? max_speed: null,
            search: search ? search: null,
            region: region ? region: null,
            type: type_filter ? type_filter: null
          }
        })
        const response = await request.data
        dispatch(Action.setFilterCar(response))
      }catch(error){
        return error
      }
      
  }
  const handleDalsheGroup = (event) => {
    switch (event.target.id) {
      case "moshnost":
        {
          dispatch(Action.setBarDisplay(!bar_display));
          dispatch(Action.setDvigitel(false));
          dispatch(Action.setSpeed(false));
        }
        break;
      case "dvigitel":
        {
          dispatch(Action.setDvigitel(!dvigitel_display));
          dispatch(Action.setBarDisplay(false));
          dispatch(Action.setSpeed(false));
        }
        break;
      case "speed": {
        dispatch(Action.setSpeed(!speed_display));
        dispatch(Action.setDvigitel(false));
        dispatch(Action.setBarDisplay(false));
      }
    }
  };
  const handleClick = (event) => {
    if (
      event.target.matches("#moshnost") ||
      event.target.matches("#dvigitel") ||
      event.target.matches("#speed")
    ) {
      return false;
    } else {
      dispatch(Action.setDvigitel(false));
      dispatch(Action.setBarDisplay(false));
      dispatch(Action.setSpeed(false));
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <div className="filter__bar">
      <form onSubmit={handleSub} >
        <output>
          <UpOutlined />
          <span>
            {" "}
            <strong>Наличие</strong>{" "}
          </span>
        </output>
        <div className="filter_bar__checks">
          <label htmlFor="lich">
            <input onChange={(event) => {
              dispatch(Action.setLich(event.target.checked))
            }} type="checkbox" id="lich" name="lich" />
            <p>
              <small>В наличие</small>
            </p>
          </label>
          <label htmlFor="zakaz">
            <input onChange={(event) => dispatch(Action.setZakaz(event.target.checked))} type="checkbox" id="zakaz" />
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
            <input type="checkbox"  id="all" name="all" />
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
            <span>до</span>
            <small>500 000</small>
          </p>
        </div>
        <div className="filter_bar__checks filter_by_static">
          <p>Мощность, л.с.</p>
          <p onClick={handleDalsheGroup} id="moshnost">
            90 {bar_display ? <UpOutlined /> : <DownOutlined />}{" "}
          </p>
          <ul
            className="bar_group__filter"
            style={{ display: bar_display ? "block" : "none" }}
          >
            <li>
              <button onClick={(event) => dispatch(Action.setSpeedFilter(event.target.textContent-0)) } className="border-transparent">90</button>
            </li>
            <li>
              <button  onClick={(event) => dispatch(Action.setSpeed(event.target.textContent-0)) } className="border-transparent">100</button>
            </li>
            <li>
              <button  onClick={(event) => dispatch(Action.setSpeed(event.target.textContent-0)) } className="border-transparent">120</button>
            </li>
            <li>
              <button  onClick={(event) => dispatch(Action.setSpeed(event.target.textContent-0)) } className="border-transparent">140</button>
            </li>
          </ul>
        </div>
        <div className="filter_bar__checks filter_by_static">
          <p> Мощность двигателя, л.с..</p>
          <p onClick={handleDalsheGroup} id="dvigitel">
            90 {dvigitel_display ? <UpOutlined /> : <DownOutlined />}{" "}
          </p>
          <ul
            className="bar_group__filter"
            style={{ display: dvigitel_display ? "block" : "none" }}
          >
            <li>
              <button onClick={(event) => Action.setDvigitelFilter(event.target.textContent-0)} className="border-transparent">90</button>
            </li>
            <li>
              <button onClick={(event) => Action.setDvigitelFilter(event.target.textContent-0)} className="border-transparent">100</button>
            </li>
            <li>
              <button onClick={(event) => Action.setDvigitelFilter(event.target.textContent-0)} className="border-transparent">120</button>
            </li>
            <li>
              <button onClick={(event) => Action.setDvigitelFilter(event.target.textContent-0)} className="border-transparent">140</button>
            </li>
          </ul>
        </div>
        <div className="filter_bar__checks filter_by_static">
          <p>Макс. скорость</p>
          <p onClick={handleDalsheGroup} id="speed">
            {" "}
            90
            {speed_display ? <UpOutlined /> : <DownOutlined />}
            <ul
              className="bar_group__filter"
              style={{ display: speed_display ? "block" : "none" }}
            >
              <li>
                <button onClick={(event) => dispatch(Action.setMaxSpeedFilter(event.target.textContent-0)) } className="border-transparent">90</button>
              </li>
              <li>
                <button onClick={(event) => dispatch(Action.setMaxSpeedFilter(event.target.textContent-0)) } className="border-transparent">100</button>
              </li>
              <li>
                <button onClick={(event) => dispatch(Action.setMaxSpeedFilter(event.target.textContent-0)) } className="border-transparent">120</button>
              </li>
              <li>
                <button onClick={(event) => dispatch(Action.setMaxSpeedFilter(event.target.textContent-0)) } className="border-transparent">140</button>
              </li>
            </ul>
          </p>
        </div>
        <output style={{ marginTop: "0.5rem" }}>
          <UpOutlined />
          <p>
            <strong>Бренд</strong>
          </p>
        </output>
        <div className="filter_bar__checks">
          <label htmlFor="BRP">
            <input onChange={(event) => dispatch(Action.setTypeFilter(event.target.value))} value={"BRP"} type="checkbox"  id="BRP" name="model" />
            <p> <small>BRP</small> </p>
          </label>
          <label htmlFor="spark">
            <input onChange={(event) => dispatch(Action.setTypeFilter(event.target.value))} type="checkbox" id="spark" value={"spark"}  name="model" />
            <p> <small>Spark</small> </p>
          </label>
        </div>
        <div className="filter_bar__checks" style={{ marginTop: "1rem" }}>
          <label htmlFor="spark3">
            <input onChange={(event) => dispatch(Action.setTypeFilter(event.target.value))} type="checkbox"  id="sprark3" name="model"  value={"spark3"}/>
            <p> <small>Spark 3</small> </p>
          </label>
        </div>
        <div className="filter_bar__checks" style={{marginTop: "1rem"}}>
          {model_display ? (
            <>
              <label htmlFor="gtr">
                <input
                  type="checkbox"
                  
                  id="gtr"
                  name="model"
                />
                <p> <small>GTR</small> </p>
              </label>
              <label htmlFor="sea">
                <input type="checkbox" id="sea" name="sea" />
                <p> <small>SEA</small> </p>
              </label>

            </>
          ) : (
            <> <NavLink onClick={() => dispatch(Action.setModelDisplay(!model_display))}>Показать еще</NavLink> </>
          )}
        </div>
        <output>
          <UpOutlined/>
          <p><strong>Модель</strong></p>
        </output>
        <div className="filter_bar__checks search_model">
        <label htmlFor="model">
            <input type="text" placeholder="Введите модель " name="model" id="model" />
        </label>
       
        </div>
        <output>
          <UpOutlined/>
          <p><strong>Акции</strong></p>
        </output>
        <div className="filter_bar__checks">
            <Asistent className={"sale"}>SALE</Asistent>
            <Asistent onClick={() => dispatch(Action.setAsistent("new"))} className={ filter_asistent === "new" ? "asistent__active" : "asistent"}>NEW</Asistent>
            <Asistent onClick={() => dispatch(Action.setAsistent("hit"))} className={ filter_asistent === "hit" ? "asistent__active" : "asistent"}>HIT</Asistent>
            <Asistent onClick={() => dispatch(Action.setAsistent("diler"))} className={ filter_asistent === "diler" ? "asistent__active" : "asistent"}>ДИЛЕР</Asistent>
        </div>
        <output>
          <UpOutlined/>
          <p><strong>Страны</strong></p>
        </output>
        <div className="filter_bar__checks">
          <label htmlFor="rossiya">
            <input onChange={event => dispatch(Action.setRegion(event.target.value))} value={"rossiya"} type="checkbox" id="rossiya" name="region" />
            <p><small>Россия</small></p>
          </label>
        <label htmlFor="germaniya">
            <input onChange={event => dispatch(Action.setRegion(event.target.value))} value={"germaniya"} type="checkbox" id="germaniya"  name="region"/>
            <p><small>Германия</small></p>
          </label>
        </div>
        <div className="filter_bar__checks">
          <label htmlFor="kitay">
            <input onChange={event => dispatch(Action.setRegion(event.target.value))} value={"kitay"} type="checkbox" id="kitay" name="region" />
            <p><small>Китай</small></p>
          </label>
          <label htmlFor="ssha">
            <input onChange={event => dispatch(Action.setRegion(event.target.value))} value={"ssha"} type="checkbox" id="ssha" name="region" />
            <p><small>CША</small></p>
          </label>      
        </div>
        <div className="filter_bar__checks submitter">
            <Btn type="submit" className="kupit_btn">
            ВЫБРАТЬ
            </Btn>
        </div>
      </form>
    </div>
  );
};
