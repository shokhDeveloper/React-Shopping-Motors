import "./SignIn.scss";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Btn, GoogleBtn, LabelText, Link, Modal, removeItem } from "../../../Settings";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Logo from "../../../Settings/assets/images/лого.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../../Settings/Redux/Settings";
import GoogleImg from "../../../Settings/assets/images/Google.png"
import {signInWithPopup} from "firebase/auth"
import { auth, provider } from "../../../Settings/Firebase/firebaseconfig";
import { PassswordSign } from "../../../Components";
export const SignIn = () => {
  const date = new Date()
  const navigate = useNavigate();
  const selector = useSelector(state => state.Reducer)
  const dispatch = useDispatch()
  const validationSchema = Yup.object({
    email: Yup.string().email("Email invalid").required("Email its required"),
    password: Yup.string().min(3, "Min 3" ).max(15, "Max 15").required("Password its required")   
  })
  const {watch, formState:{errors, isValid}, handleSubmit, register} = useForm({
    defaultValues:{
        email: "",
        password: ""
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema)
  })
  const handleKey = (event) => {
    if (event.keyCode === 27) {
      navigate(-1);
    } else {
      return false;
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, []);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {mutate} = useMutation(data => {
    axios.post(`${process.env.REACT_APP_SERVER}` + "/login", data).then(response => {
      if(response.status === 200){
        const {accessToken, user} = response.data
        if(accessToken){
            dispatch(Action.setToken(accessToken))
            dispatch(Action.setUser(user))
            navigate("/")
            removeItem("loader")

        } 
      }
    }).catch(error => {
      console.log(error)
    })
  })
  const handleSub = (event) => {
    mutate({...event, date: `${date.toLocaleString()} Login its user`})
  }
  const handleGoogle = () => {
      signInWithPopup(auth, provider).then(async (data) => {
        const {user}  = data
        if(user){
          dispatch(Action.setPasswordModal())       
          dispatch(Action.setFirebaseUser({
            name: user.displayName.split(" ")[0],
            lastname: user.displayName.split(" "[1]),
            email: user.email,
            password: null,
            uid: user.uid
          }))
        }
      })
  }
  watch()
  return (
    <div className="sign__in">
      <div className="container">
        <div className="sign_in__texts">
          <img src={Logo} alt="Logo" width={120} height={120} />
        </div>
        <form onSubmit={handleSubmit(handleSub)} className="sign_in__form">
          <LabelText variant={errors?.email ? "error": "default"}>
          {errors?.email ? <p>{errors?.email?.message}</p>: null}
          <FormControl sx={{ m: 1, width: "25ch"}}>
            <InputLabel htmlFor="outlined-adornment-email" error={errors?.email ? true: false }>Email</InputLabel>
            <OutlinedInput  id="outlined-adornment-email" {...register("email")} error={errors?.email ? true: false } type="email" label="Email"/>
          </FormControl>
          </LabelText>
          <LabelText variant={errors?.password ? "error": "default"}>
            {errors?.password ? <p>{errors?.password?.message}</p>: null}
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel error={errors?.password ? true: false } htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          error={errors?.password ? true: false }
            {...register("password")}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </LabelText>
          <Btn className="kupit_btn">Yuborish</Btn>
          <div className="google">
          <GoogleBtn onClick={handleGoogle} style={{backgroundImage: `url(${GoogleImg})`}}> Google orqali kirish</GoogleBtn>
          </div>
          <Link to={"/sign-up"} variant="link_block" >Sizda akkaunt yo'qmi ? </Link>
        </form>
      </div>
      <Modal title={"Parolingizni kiriting"} modal={selector.modalPassword.apperence}>
        <PassswordSign params={"login"}/>
      </Modal>
    </div>
  );
};
