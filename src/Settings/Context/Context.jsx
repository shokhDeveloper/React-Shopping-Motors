import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "../Locals";

export const Context = createContext()
export const ContextProvider = ({children}) => {
    const {Provider} = Context
    const token_locals = getItem('token_auto')
    const [token, setToken] = useState(token_locals ? token_locals: null)
    const user_locals  = getItem('user_auto')
    const [user, setUser] = useState(user_locals ? JSON.parse(user_locals): null)
    useEffect(() => {
    if(token){
    setItem('token_auto', token)
    }
    if(user){
    setItem('user_auto', user)
    }
    },[token, user])
    return(
        <Provider value={{token, setToken, user, setUser}}>
            {children}
        </Provider>
    )
}