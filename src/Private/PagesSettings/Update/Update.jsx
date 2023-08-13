import "./Update.scss"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Btn, Modal } from "../../../Settings"
import axios from "axios"
import { useMutation } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { Action } from "../../../Settings/Redux/Settings"
import { useEffect } from "react"
export const Update = ({data}) => {
    const {disabledProfileSettings, user, modalUpdate} = useSelector((state) => state.Reducer)
    const date = new Date()
    const dispatch = useDispatch()
    const {mutate} = useMutation(data => {
        axios.put(process.env.REACT_APP_SERVER + `/users/${user.id}`, data).then(response => {
            if(response.status === 200){
                dispatch(Action.setModalUpdate(true))
            }
        })
    })
    const validationSchema = Yup.object({   
        name: Yup.string().required("Name its required"),
        lastname: Yup.string().required("Lastname its required"),
        email: Yup.string().email("Email its required").required("Email its required"),
        password: Yup.string().min(3, "Min 3").max(15, "Max 15").required("Password its required")
    }) 
    const {register, watch, formState:{errors, isValid}, handleSubmit } = useForm({
        defaultValues: {
            name: data["name"],
            lastname: data["lastname"],
            email: data["email"],
            password: "Password"
        },
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    })
    
    const onSubmit = (event) => { 
        if(event.name && event.lastname && event.email && event.password){
            mutate({...event, date:` ${date.toLocaleString()} Update its profile ...`  })
        }{
            return false
        }
    }
    watch()
    useEffect(() => {
        if(modalUpdate){
            setTimeout(() => {
                dispatch(Action.setModalUpdate(false))
            },1500)
        }
    },[modalUpdate])
    return(
        <section className="akkaunt__settings">
            <div className="container">
            <h2 className="akkaunt_settings__title"><span>Akkaunt ma'lumotlarni</span>  yangilash</h2>
            {[data]?.length && 
               <form  id="form" onSubmit={handleSubmit(onSubmit)} className="akkaunt__form">
                    <output>
                    </output>
                    {Object.keys(data).map(item => {
                        if(item !== "uid" && item !== "id" && item !== "date"){
                            return(
                                <Input disabled={disabledProfileSettings}  value={data[item] ? data[item] : null} register={register} errors={errors} params={item} password={item === "password" ? true: false} text={
                                    (function(){
                                        let result = ''
                                        item.split("").map((item, index) =>{
                                        if(index === 0){
                                            result += item.toUpperCase()
                                        }else {
                                            result += item.toLowerCase()
                                        }

                                    })
                                    return result
                                }())}/>
                            )
                        }
                    })}
                    {disabledProfileSettings && (
                        <Btn form={"none"} type="button" className="kupit_btn" onClick={() => dispatch(Action.setDisabledProfileSettings(false)) }>Tahrirlash</Btn>
                    )}
                </form>
            }
            {!disabledProfileSettings && 
            <Btn form="form" className="kupit_btn">Submit</Btn>
            }
            </div>
            <Modal modal={modalUpdate}  title={"Profile Update"} >
                <h2 style={{color: "green"}}>Muvaffaqiyatli yangilandi</h2>
            </Modal>
        </section>
    )
}