import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Btn, removeItem } from "../../Settings";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../Settings/Redux/Settings";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login = () => {
    const date = new Date()
    const selector = useSelector((state) => state.Reducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {mutate} = useMutation((data) => {
        axios.post(`${process.env.REACT_APP_SERVER}/login`, {...data}).then(response => {
            if(response.status === 200){
                const {accessToken, user} = response.data
                if(accessToken){
                    removeItem("loader")
                    dispatch(Action.setToken(accessToken))
                    dispatch(Action.setUser(user))
                    dispatch(Action.setPasswordModal())
                    navigate("/")
                }   
            }
        }).catch(error => {
            console.log(error)
        })
    })
    const onSubmit = (event) => {
        dispatch(Action.setPasswordChange(event.password))
    }
    const validationSchema = Yup.object({
      password: Yup.string().min(3, "Min 3").max(15, "Max 15").required("Password its required")  
    })
    const {register, watch, formState:{isValid, errors}, handleSubmit} = useForm({
        defaultValues:{
            password: ""
        },
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    })
    useEffect(() => {
        if(selector.userFirebase.password !== null){
            mutate({...selector.userFirebase, date: date.toLocaleString() })
        }
    }, [selector.userFirebase])
    watch()
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input params={"password"} errors={errors} password={true} register={register} text={"Password"}/>
            <Btn className="kupit_btn" disabled={!isValid}>Yuborish</Btn>
        </form>
    )
}