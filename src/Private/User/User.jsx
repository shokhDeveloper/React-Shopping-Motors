import { Route, Routes } from "react-router-dom"
import { Header } from "../../Components"
import {Hero} from "../Hero"
import { Gidro } from "../Gidro"
export const User = () => {   
    return(
        <>
            <Header/>
            <main id="main__private">
            <Routes>
                <Route index  element={<Hero/>}/>
                <Route path="/*" element={<Hero/>}/>
                <Route path="/Гидроциклы" element={<Gidro/>}/>
            </Routes>
            </main>
        </>
    )
}