import "./SignIn.scss";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Btn, LabelText, Link } from "../../../Settings";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Logo from "../../../Settings/assets/images/лого.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
export const SignIn = () => {
  const navigate = useNavigate();
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
  const handleSub = (event) => {
    console.log(event)
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
          <Link to={"/sign-up"} variant="link_block" >Sizda akkaunt yo'qmi ? </Link>
        </form>
      </div>
    </div>
  );
};
