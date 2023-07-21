import { useForm } from "react-hook-form"
import { Input } from "../Input"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup";
import { Btn, removeItem, setItem } from "../../Settings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Action } from "../../Settings/Redux/Settings";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
export const PassswordSign  = ({params}) => {
    const date = new Date()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(state => state.Reducer)
    const {mutate} = useMutation((data) => {
        axios.post(`${process.env.REACT_APP_SERVER}/${params}`, data).then(response => {
            const {accessToken, user} = response.data
            if(accessToken){
                dispatch(Action.setToken(accessToken))
                dispatch(Action.setUser(user))
                dispatch(Action.setLoader())
                removeItem("loader")
                navigate("/")
            }else{
                return false
            }
        }).catch(error => {
            return { error ,  private : false}
        })
    })
    const onSubmit = (event) => {
        dispatch(Action.setPasswordChange(event.password))
        if(selector.userFirebase.password !== null){
            mutate({ ...selector.userFirebase,  date: `${date.toLocaleString()} Register-At its user `})  
        }    
    }
    const validationSchema = Yup.object({
        password: Yup.string().min(3, "Min 3").max(15, "Max 15").required("Password majburiy")
    })
    const {register, formState:{errors, isValid}, watch, handleSubmit } = useForm({
        defaultValues:{
            password: ""
        },
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    })
    watch()
    useEffect(() => {
        if(selector.userFirebase.name !== null){
            console.log(selector.userFirebase)
        }
    }, selector.userFirebase)
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors} params={"password"} password={true} register={register} text={"Password"} />
            <Btn disabled={!isValid} className="kupit_btn">Yuborish</Btn>
        </form>
    )
}