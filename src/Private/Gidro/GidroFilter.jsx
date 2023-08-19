import "./Gidro.scss"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DalsheBtn } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Action } from "../../Settings/Redux/Settings"
import { Bar } from "./Bar"

export const GidroFilter = () => {
    const {gidroText} = useSelector((state) => state.Reducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleKey = (event) => {
    if(event.keyCode === 27){
        navigate(-1)
    }
   }
   useEffect(() => {
    window.addEventListener("keyup", handleKey)
    return () => window.removeEventListener("keyup", handleKey)
   },[])
    return(
        <div className="gidro__filter">
            <h2 className="gidro__title">Гидроциклы</h2>
            <div className="gidro_filter__items">
                <div className="gidro_filter__child">
                    <p>Полноприводные</p>
                    <p>от 5000</p>
                    <p>BRP</p>
                    {gidroText ? (
                        <>
                        <p>Полноприводные</p>
                        <p>от 5000</p>
                        <p>BRP</p>
                    
                        </>
                    ): (
                        <DalsheBtn onClick={() => dispatch(Action.setTextGidro(true)) } className="border-transparent" variant={"small"} >еще</DalsheBtn>
                    
                    )}
                </div>
                <div className="gidro_filter__child">
                    <select className="border-transparent" defaultValue={"default"}>
                        <option selected disabled value="default">По полулярности</option>
                        <option value="">По <span style={{textTransform: "lowercase"}}>поПулярности</span> </option>
                    </select>
                </div>
            </div>
            <div className="gidro_filter__elements">
                <div className="gidro_filter__bar">
                    <Bar/>
                </div>
                <div className="gidro_filter__tovars">
                    <h1>Helo</h1>
                </div>
            </div>
        </div>
    )
}