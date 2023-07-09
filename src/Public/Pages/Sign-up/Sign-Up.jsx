import "./SignUp.scss";
import Logo from "../../../Settings/assets/images/лого.svg";
import { Input } from "../../../Components";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { Btn, setItem } from "../../../Settings";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Action } from "../../../Settings/Redux/Settings";
export const SignUp = () => {
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
            }
        }
    })
  })  
  const handleSub = async (event) => {
    mutate({...event, date: `${date.toLocaleString()} Register-At its user` })
  };
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
        </form>
      </div>
    </div>
  );
};
