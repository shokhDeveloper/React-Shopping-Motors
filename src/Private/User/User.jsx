import { Route, Routes } from "react-router-dom"
import { Header } from "../../Components"
import {Hero} from "../Hero"
import { Gidro } from "../Gidro"
import { Akkaunt, LikesTovars, ShoppingTovars } from "../PagesSettings"
export const User = () => {   
    return(
        <>
            <Header/>
            <main id="main__private">
            <Routes>
                <Route index  element={<Hero/>}/>
                <Route path="/*" element={<Hero/>}/>
                <Route path="/Гидроциклы/*" element={<Gidro/>}/>
                <Route path="/settings" element={<Akkaunt/>}/>
                <Route path="/likes__tovars" element={<LikesTovars/>}/>
                <Route path="/shopping" element={<ShoppingTovars/>}/>
            </Routes>
            </main>
        </>
    )
}