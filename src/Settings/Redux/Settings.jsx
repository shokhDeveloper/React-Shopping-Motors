import { createSlice } from "@reduxjs/toolkit";
import Radio1X from "../assets/images/radio@1x.png";
import Radio2X from "../assets/images/radio@2x.png";
import Tel1x from "../assets/images/tel@1x.png";
import Tel2x from "../assets/images/tel@2x.png";
import Control1x from "../assets/images/control@1x.png";
import Control2x from "../assets/images/control@2x.png";
import Tovar1x from "../assets/images/Tovar@1x.png";
import Tovar2x from "../assets/images/Tovar@2x.png";
export const slice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    tovars: [
      {
        name: "BRP Audio-портативная система",
        price: "нет в наличии",
        image: {
          oneX: Radio1X,
          thueX: Radio2X,
        },
      },
      {
        name: "Garmin Echomap Plus 62cv",
        price: "45 800 ₽",
        image: {
          oneX: Tel1x,
          thueX: Tel2x,
        },
      },
      {
        name: "RF D.E.S.S.TM Key",
        price: "нет в наличии",
        image: {
          oneX: Control1x,
          thueX: Control2x,
        },
      },
      {
        name: "Мужской костюм3мм",
        price: "7 000 ₽",
        image: {
          oneX: Tovar1x,
          thueX: Tovar2x,
        },
      },
    ],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});
export const Action = slice.actions;
export const Reducer = slice.reducer;
