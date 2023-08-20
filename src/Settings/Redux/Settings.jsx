import { createSlice } from "@reduxjs/toolkit";
import Radio1X from "../assets/images/radio@1x.png";
import Radio2X from "../assets/images/radio@2x.png";
import Tel1x from "../assets/images/tel@1x.png";
import Tel2x from "../assets/images/tel@2x.png";
import Control1x from "../assets/images/control@1x.png";
import Control2x from "../assets/images/control@2x.png";
import Tovar1x from "../assets/images/Tovar@1x.png";
import Tovar2x from "../assets/images/Tovar@2x.png";
import Kvadrat from "../assets/images/kukMot.png";
import Kvadrat2 from "../assets/images/kukMoto@2x.png";
import KukKema from "../assets/images/MotoSuvKuk.png";
import KukKema2 from "../assets/images/MotoSuvKuk@2x.png";
import OqKema from "../assets/images/kemaOq.png";
import OqKema2 from "../assets/images/kemaOq@2x.png";
import Moto from "../assets/images/qoraMoto.png";
import Moto2 from "../assets/images/qoraAuto@2x.png";
import QoraAuto from "../assets/images/qoraAuto.png";
import QoraAuto2 from "../assets/images/qoraAuto@2x.png";
import Dvigitel from "../assets/images/Dvigitel.png";
import Dvigitel2 from "../assets/images/Dvigitel@2x.png";
import Sumka from "../assets/images/Sumka.png";
import Jiket from "../assets/images/Jiket.png";
import Drubin from "../assets/images/Drubin.png";
import Ip from "../assets/images/Ip.png";
import { getItem, setItem } from "../Locals";
const initialToken = window.localStorage.getItem("token_auto") || null;
const initialUser = window.localStorage.getItem("user_auto")
? JSON.parse(window.localStorage.getItem("user_auto"))
: null;
const korzina =  getItem("korzina") ? JSON.parse(getItem("korzina")): []
let arr = []
  export const slice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    token: initialToken,
    user: initialUser,
    loader: {
      apperence: false,
    },
    modalPassword: {
      apperence: false,
    },
    userFirebase: {
      name: null,
      lastname: null,
      email: null,
      password: null, // Foydalanuvchi kiritgan parol
      uid: null,
    },
    notLoginModalError: {
      apperence: false,
    },
    textErrorModal: "Bunday user mavjud emas",
    tovars: [
     {"name":"BRP Audio-портативная система","price":"нет в наличии","image":{"oneX":Radio1X,"thueX":Radio2X},"id":9, "type": "tovar"},{"name":"Garmin Echomap Plus 62cv","price":"45 800 ₽","image":{"oneX":Tel1x,"thueX":Tel2x},"id":10, "type": "tovar"},{"name":"RF D.E.S.S.TM Key","price":"нет в наличии","image":{"oneX":Control1x,"thueX":Control2x},"id":11, "type": "tovar"},{"name":"Мужской костюм3мм","price":"7 000 ₽","image":{"oneX":Tovar1x,"thueX":Tovar2x},"id":12, "type": "tovar"},
    ],
    cardMoto: [
      {
        name: "Квадроциклы",
        image: {
          oneX: Kvadrat,
          thueX: Kvadrat2,
        },
      },
      {
        name: "Гидроциклы",
        image: {
          oneX: KukKema,
          thueX: KukKema2,
        },
      },
      {
        name: "Катера",
        image: {
          oneX: OqKema,
          thueX: OqKema2,
        },
      },
      {
        name: "Снегоходы",
        image: {
          oneX: Moto,
          thueX: Moto2,
        },
      },
      {
        name: "Вездеходы",
        image: {
          oneX: QoraAuto,
          thueX: QoraAuto2,
        },
      },
      {
        name: "Двигатели",
        image: {
          oneX: Dvigitel,
          thueX: Dvigitel2,
        },
      },
    ],
    "tovarsAll":[{"name":"Квадроциклы","price":"900 P","image":{"oneX":"http://localhost:3000/static/media/Moto.50fbbcd8d36b29bc3d5f.png","thueX":"http://localhost:3000/static/media/Moto.50fbbcd8d36b29bc3d5f.png"},"id":1, "type": "car"},{"name":"Гидроциклы","price":"900 P","image":{"oneX":"http://localhost:3000/static/media/Moto_2.352c2dbda1c1d9dc7f89.png","thueX":"http://localhost:3000/static/media/Moto_2.352c2dbda1c1d9dc7f89.png"},"id":2, "type": "car"},{"name":"Катера","price":"900 P","image":{"oneX":"http://localhost:3000/static/media/Moto_5.8bf562ebe49cdddebfc2.png","thueX":"http://localhost:3000/static/media/Moto_5.8bf562ebe49cdddebfc2.png"},"id":3, "type": "car"},{"name":"Вездеходы","price":"900 P","image":{"oneX":"http://localhost:3000/static/media/Moto_3.d2147df2acafb4ea77fc.png","thueX":"http://localhost:3000/static/media/Moto_3.d2147df2acafb4ea77fc.png"},"id":4, "type": "car"},{"name":"Водонепроницаемый Рюкзак","price":"9 800 ₽","image":"http://localhost:3000/static/media/Sumka.ac9f76a5f1158ac01538.png","id":5, "type": "tovar"},{"name":"Спасательный жилет BRP Men's Airflow PFD","price":"6 900 ₽","image":"http://localhost:3000/static/media/Jiket.6fc23201f1d3851732e2.png","id":6, "type": "tovar"},{"name":"BRP Audio-Premium System","price":"68 000 ₽","image":"http://localhost:3000/static/media/Drubin.09b81f646773285f7c8a.png","id":7, "type": "tovar"},{"name":"Спасательное снаряжение","image":"http://localhost:3000/static/media/Ip.2bc2af26efa2328c3413.png","id":8, "type": "tovar"},{"name":"BRP Audio-портативная система","price":"нет в наличии","image":{"oneX":"Radio1X","thueX":"Radio2X"},"id":9, "type": "tovar"},{"name":"Garmin Echomap Plus 62cv","price":"45 800 ₽","image":{"oneX":"Tel1x","thueX":"Tel2x"},"id":10, "type": "tovar"},{"name":"RF D.E.S.S.TM Key","price":"нет в наличии","image":{"oneX":"Control1x","thueX":"Control2x"},"id":11, "type": "tovar"},{"name":"Мужской костюм3мм","price":"7 000 ₽","image":{"oneX":"Tovar1x","thueX":"Tovar2x"},"id":12, "type": "tovar"}],
    link: "nomeru",
    filterCar: null,
    carArrayImg: [
      {"name":"Водонепроницаемый Рюкзак","price":"9 800 ₽","image":Sumka,"id":5, "type": "tovar"},{"name":"Спасательный жилет BRP Men's Airflow PFD","price":"6 900 ₽","image":Jiket,"id":6, "type": "tovar"},{"name":"BRP Audio-Premium System","price":"68 000 ₽","image":Drubin,"id":7, "type": "tovar"},{"name":"Спасательное снаряжение","image":Ip,"id":8, "type": "tovar"}
    ],
    korzina,
    akkaunt:[],
    disabledProfileSettings: true,
    modalUpdate: false,
    orderRequest: false,
    korzinaRequestClassName: "korzina_request__items",
    korzinaX: false,
    orderModal: false,
    successFullText: "Surovingiz muvaffaqiyatli yuborildi tez orada aloqaga chiqiladi hurmatli",
    gidroText: false,
    price_filter: 100,
    bar_display: false,
    dvigitel_display: false,
    speed_display: false,
    model_display: false,
    filter_asistent: "",
    filter_data: [],
    lich: false,
    zakaz: false,
    speed: 0,
    dvigitel: 0,
    max_speed: 0,
    brand: null,
    search: null,
    region: null,
    type_filter: null
  },

  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      setItem("token_auto", state.token);
    },
    setUser(state, action) {
      try {
        if (action.payload) {
          state.user = action.payload;
          setItem("user_auto", state.user);
        }
      } catch (error) {
        state.user = error;
      }
    },
    setLoader(state) {
      state.loader.apperence = !state.loader.apperence;
    },
    setPasswordModal(state) {
      state.modalPassword.apperence = !state.modalPassword.apperence;
    },
    setFirebaseUser(state, action) {
      state.userFirebase = action.payload;
    },
    setPasswordChange(state, action) {
      state.userFirebase.password = action.payload;
    },
    setErrorModal(state, action) {
      state.notLoginModalError.apperence = action.payload;
    },
    setLink(state, action) {
      state.link = action.payload;
    },
    createCar(state, action) {
      let car = [];
      let tovar = [];
      let obj = {};
     action.payload.filter((item, index) => {
        if (item.type === "car") {
          car = [...car, item];
        } else if (item.type === "tovar") {
          tovar = [...tovar, item];
        }
        obj = {
          car,
          tovar,
        };
        return obj
      });
      state.filterCar = obj
    },
    setKorzina(state, action){
      if(state.korzina.length){
         if(state.korzina?.some(item => item.id === action.payload.id )){
          state.korzina = state.korzina
        } else{
          state.korzina.push(action.payload)
          setItem("korzina", state.korzina)
        }
      }else{
        state.korzina.push(action.payload)
        setItem("korzina", state.korzina)
      }
    },
    setAkkaunt(state, action){
      state.korzina = action.payload
    },
    setDisabledProfileSettings(state, action){
      state.disabledProfileSettings = action.payload
    },
    setModalUpdate(state, action){
      state.modalUpdate = action.payload
    },
    setRequestOrder(state, action){
      state.orderRequest = action.payload
    },
    setKorzinaClassName(state, action){
      state.korzinaRequestClassName = action.payload
    },
    setKorzinaX(state, action){
      state.korzinaX = action.payload
    },
    setOrderModal(state, action){
      state.orderModal = action.payload
    },
    setDeleteKorzinaTovar(state, action){
      state.korzina = action.payload
    },
    setTextGidro(state, action){
      state.gidroText = action.payload
    },
    setPrice(state, action){
      state.price_filter = action.payload
    },
    setBarDisplay(state, action){
      state.bar_display = action.payload
    },
    setDvigitel(state, action){
      state.dvigitel_display = action.payload
    },
    setSpeed(state, action){
      state.speed_display = action.payload
    },
    setModelDisplay(state, action){
      state.model_display = action.payload
    },
    setAsistent(state, action){
      state.filter_asistent = action.payload
    },
    setFilterCar(state, action){
      state.filter_data = action.payload
    },
    setLich(state, action){
      state.lich = action.payload
    },
    setZakaz(state, action){
      state.zakaz = action.payload
    },
    setSpeedFilter(state, action){
      state.speed = action.payload
    },
    setDvigitelFilter(state, action){
      state.dvigitel = action.payload
    },
    setMaxSpeedFilter(state, action){
      state.max_speed = action.payload
    },
    setSearchFilter(state, action){
      state.search = action.payload
    },  
    setRegion(state, action){
      state.region = action.payload
    },
    setTypeFilter(state, action){
      state.type_filter = action.payload
    }
  },
});
export const Action = slice.actions;
export const Reducer = slice.reducer;
