import "./SignUp.scss";
import Logo from "../../../Settings/assets/images/лого.svg";
import { Input, PassswordSign } from "../../../Components";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { Btn, GoogleBtn, Modal, setItem } from "../../../Settings";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../../Settings/Redux/Settings";
import GoogleImg from "../../../Settings/assets/images/Google.png"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../Settings/Firebase/firebaseconfig";
import { useEffect } from "react";
export const SignUp = () => {
  const selector = useSelector(state => state.Reducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const date = new Date()
  const validationSchema = Yup.object({
    name: Yup.string().required("Name its required"),
    lastname: Yup.string().required("Lastname its required"),
    email: Yup.string().email("Email its inValid").required("Email its required"),
    password: Yup.string().min(3, "Min 3").max(15, "Max 15").required("Password its required")
  })
    const {register, watch, formState:{errors, isValid}, handleSubmit} = useForm({
    defaultValues:{
        name: "",
        lastname: "",
        email: "",
        password: ""
    },
    mode: "onChange",
    resolver:yupResolver(validationSchema)
  })
  const {mutate} = useMutation(data => {
    axios.post(process.env.REACT_APP_SERVER + "/register", data).then(response => {
        if(response.status === 201){
            const {accessToken, user} = response.data
            if(accessToken !== null || accessToken !== undefined){
                dispatch(Action.setToken(accessToken))
                dispatch(Action.setUser(user))
                setItem("user_auto", user)
                setItem("token_auto", accessToken)
                navigate("/")
                window.localStorage.removeItem("loader")
            }
        }
    })
  })  
  const handleSub = async (event) => {
    mutate({...event, date: `${date.toLocaleString()} Register-At its user` })
  };
  const handleGoogle = () => {
    
    signInWithPopup(auth, provider).then(  (data) => {
      const {user} =  data
      if(user){
          dispatch(Action.setPasswordModal())
          dispatch(Action.setFirebaseUser({
            name: user.displayName.split(" ")[0],
            lastname: user.displayName.split(" ")[1],
            email: user.email,
            password: null,
            uid: user.uid,
          }))  
      }
    } )
  }
  const validationSchemaPassword = Yup.object({
    password: Yup.string().min(3, "Min 3").max(15, "Max 15").required("Password reduired")
  })
  const passwordForm = useForm({
    defaultValues:{
      password: ""
    },
    mode: "onChange",
    resolver: yupResolver(validationSchemaPassword)
  })
  const onSubmit = async (event) => {
    dispatch(Action.setPasswordChange(event.password))
    
  }
  useEffect(() => {
    if(selector.userFirebase.password){
      ;(async function(){
        const request = await axios.post(process.env.REACT_APP_SERVER+"/register", selector.userFirebase)
        const response = await request.data
        const {accessToken, user} = response
        if(accessToken){
        dispatch(Action.setToken(accessToken))
        dispatch(Action.setUser(user))
    }else{
      return false
    }
      }())
    }
  },[selector.userFirebase.password])
  watch()
  return (
    <div className="sign__up">
      <div className="container">
        <div className="sign_up__texts">
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit(handleSub)} className="sign_up__form">
          <Input register={register} errors={errors} params={"name"} text={"Name"} password={false} key={"name"}/>
          <Input register={register} errors={errors} params={"lastname"} text={"Lastname"} password={false} key={"lastname"}/>                  
          <Input register={register} errors={errors} params={"email"} text={"Email"} password={false} key={"email"}/>
          <Input register={register} errors={errors} params={"password"} text={"password"} password={true} key={"password"}/>
          <div>
          <Btn disabled={!isValid} className="kupit_btn" type="submit">Submit</Btn>
          </div>
        <div className="google">
          <GoogleBtn type="button" onClick={handleGoogle} style={{backgroundImage: `url(${GoogleImg})`}}>Google orqali kirish</GoogleBtn>
        </div>
        </form>
      </div>
    <Modal error={false} title={"Parolingizni kiriting"} modal={selector.modalPassword.apperence} >
      <form onSubmit={passwordForm.handleSubmit(onSubmit)}>
        <Input errors={passwordForm.formState.errors} params={"password"} password={true} register={passwordForm.register} text={"Password"}  />
        <Btn className="kupit_btn" type="submit">Yuborish</Btn>
      </form>
    </Modal>
    </div>
  );
};
