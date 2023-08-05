import { Route, Routes } from "react-router-dom"
import { Header } from "../../Components"
import {Hero} from "../Hero"
export const User = () => {   
    return(
        <>
            <Header/>
            <main id="main__private">
            <Routes>
                <Route index  element={<Hero/>}/>
                <Route path="/*" element={<Hero/>}/>
                <Route path="/Гидроциклы" element={<Hero/>}/>
            </Routes>
            </main>
        </>
    )
}