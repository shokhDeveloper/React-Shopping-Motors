import { NavLink } from "react-router-dom";
import "../LikesTovars/LikeTovars.scss";
import { useDispatch, useSelector } from "react-redux";
import { Btn, Modal, setItem } from "../../../Settings";
import { Action } from "../../../Settings/Redux/Settings";
import { useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useCart } from "react-use-cart";
export const ShoppingTovars = () => {
  const { korzina, orderRequest, korzinaRequestClassName, korzinaX, user, orderModal } = useSelector((state) => state.Reducer);
  const {removeItem} = useCart()
  const dispatch = useDispatch()
  const {mutate} = useMutation((data) => {
    axios.post(process.env.REACT_APP_SERVER + "/order", data).then(response => {
        if(response.status === 201){
            if(orderRequest){
                dispatch(Action.setKorzinaClassName("korzina_request__items"))
                setTimeout(() => {
                dispatch(Action.setRequestOrder(false))
                dispatch(Action.setKorzinaX(false))
                dispatch(Action.setOrderModal(true))
                }, 1000)
            }
        }
    })
  })
  const handleSub = (event) => {
    event.preventDefault();
    let rejex = new RegExp(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/, "gi")
    const data = new FormData(event.target);
    if(rejex.test(data.get("number"))){
        mutate({korzina, user , number: data.get("number")})
    }else{
        return false
    }
  };
  useEffect(() => {
    if(orderRequest){
        setTimeout(() => {
            dispatch(Action.setKorzinaClassName("korzina_request__items active__request"))
        }, 500)
    }
    
  },[orderRequest])
  useEffect(() => {
    if(korzinaX && orderRequest){
        console.log("ishladi")
        dispatch(Action.setKorzinaClassName("korzina_request__items"))
        setTimeout(() => {
            dispatch(Action.setRequestOrder(false))
            dispatch(Action.setKorzinaX(false))
        }, 1000)
    }
  },[korzinaX, orderRequest])
  const handleDeleteTovar = (id) =>{
    let filter = korzina.filter(item => item.id !== id)
    dispatch(Action.setDeleteKorzinaTovar(filter))
    setItem("korzina", filter)
  }
  return (
    <section className="korzina">
      <div className="container">
        {korzina?.length ? (
          <>
          <div className="korzina__btn">
            <Btn onClick={() => dispatch(Action.setRequestOrder(true))} className="kupit__btn">Sotib olish surovini yuborish</Btn>
          </div>
            <div className="korzina__items">
              {korzina?.map((item) => {
                const {id, image, apperence } = item;
                const img =
                  typeof image === "object" && image?.oneX ? image.oneX : image;
                return (
                  <div key={id} className="pop__slide">
                    <div className="pop_slide__body">
                      <img width={300} height={200} src={img} alt="Sumka" />
                      <div className="pop_slide__shop">
                        <NavLink to={"/shop"}>посмотреть товар</NavLink>
                      </div>
                      {apperence ? (
                        <>
                          <h3>Спасательное снаряжение</h3>
                          <p>
                            <strong>нет в наличии</strong>
                          </p>0
                          <NavLink className={"pop_slide__link"} to={"/lichno"}>
                            Сообщить о поступлении
                          </NavLink>
                        </>
                      ) : (
                        <>
                          <h3>Водонепроницаемый Рюкзак</h3>
                          <h3>9 800 ₽</h3>
                        </>
                      )}
                    </div>
                    <div className="pop_slide__footer">
                      <Btn onClick={ () => handleDeleteTovar(id)} className="kupit_btn" variant={"danger"}>Remove</Btn>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h2>Hozirda hech qanday tovar sotib olinmagan</h2>
        )}
      </div>
      {korzina?.length && (
        <div className="korzina__request" style={{display: orderRequest ? "flex": "none" }}>
         <div className={korzinaRequestClassName}>
            <div className="korzina_request__header">
                <button onClick={() => dispatch(Action.setKorzinaX(true))} className="x border-transparent">&times;</button>
            </div>
          <div className="container">
            <form onSubmit={handleSub} className="order__form">
              <output>
                <h2> <span>Tovarni harid qilish uchun surovni</span> yuboring</h2>
              </output>
              <label htmlFor="order">
                <input className="order__input border-transparent" type="text" name="number" id="order" />
              </label>
              <div>
                <Btn className="kupit_btn">Yuborish</Btn>
              </div>
            </form>
          </div>
         </div>
        </div>
      )}
      <Modal modal={orderModal} error={false} type={"successFuly"} title={"Surov yuborildi"}>
        <h1>Salom</h1>
      </Modal>
    </section>
  );
};
