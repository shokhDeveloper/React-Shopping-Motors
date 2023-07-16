import { useEffect } from "react"
import { Loader } from "../../Components"
import { useDispatch, useSelector } from "react-redux"
import { Action } from "../../Settings/Redux/Settings"
import { getItem, setItem } from "../../Settings"
import { Admin } from "../../Admin"
import { User } from "../User"
export const Home = () => {
    const selector = useSelector((state) => state.Reducer)
    const dispatch = useDispatch()
    const handleLoader = () => {
        if(getItem("loader") === null && selector?.loader.apperence !== true){
            setTimeout(() => {
                dispatch(Action.setLoader())
                setItem("loader", true)
            }, 2000)
        }    
    }
    useEffect(() => {
        if(selector?.loader?.apperence !== true){
            handleLoader()
        }
    },[selector?.loader])
    return(
        <>
            {selector?.loader?.apperence === false && getItem("loader") === null ?  (
                <Loader/>
            ): (
                <>
                    {selector?.user?.name === "Admin"  && selector.user?.email === "admin@gmail.com" ? (
                        <Admin/>
                    ) : (
                        <User/>
                    )}  
                </>
            )}
        </>
    )
}