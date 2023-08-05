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
import { setItem } from "../Locals";
const initialToken = window.localStorage.getItem("token_auto") || null;
const initialUser = window.localStorage.getItem("user_auto")
  ? JSON.parse(window.localStorage.getItem("user_auto"))
  : null;
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
    link: "nomeru",
    filterCar: null,
    carArrayImg: [
      {"name":"Водонепроницаемый Рюкзак","price":"9 800 ₽","image":Sumka,"id":5, "type": "tovar"},{"name":"Спасательный жилет BRP Men's Airflow PFD","price":"6 900 ₽","image":Jiket,"id":6, "type": "tovar"},{"name":"BRP Audio-Premium System","price":"68 000 ₽","image":Drubin,"id":7, "type": "tovar"},{"name":"Спасательное снаряжение","image":Ip,"id":8, "type": "tovar"}
    ],
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
  },
});
export const Action = slice.actions;
export const Reducer = slice.reducer;
