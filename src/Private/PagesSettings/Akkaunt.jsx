import axios from "axios"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Action } from "../../Settings/Redux/Settings"
import { useQuery } from "react-query"
import { Input } from "../../Components"
import { Update } from "./Update"

export const Akkaunt = () => {
    const navigate = useNavigate()
    const {user, akkaunt} = useSelector(state => state.Reducer)
    const dispatch = useDispatch()
    const handleKey = (event) => {
        console.log(event.keyCode)
        if(event.keyCode === 27){
            navigate(-1)
        }
    }
    const handleGetUser = useCallback(async () => {
        const request = await axios.get(process.env.REACT_APP_SERVER + `/users/${user.id}`) 
        const response = await request.data
        return response
    },[user.id])
    const {data, isError, isSuccess} = useQuery(`/users/${user.id}`, handleGetUser)
    useEffect(() => {
        window.addEventListener("keyup", handleKey )
        return () => window.removeEventListener("keyup", handleKey)
    },[])
    useEffect(() => {
        handleGetUser()
    },[handleGetUser])
    return(
        <div className="akkaunt">
            <div className="container">
                {isSuccess &&
                    <Update data={data}/>
                }
            </div>
        </div>
    )
}