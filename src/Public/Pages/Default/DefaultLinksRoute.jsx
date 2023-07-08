import { Navigate, useRoutes } from "react-router-dom"
import { DefaultData } from "./DefaultData"

export const DefaultLinksRoute = () => {
    const routes = [
        {
            path: "/",
            element: <DefaultData/>  
        },
        {
            path: "/Самовывоз",
            element: <DefaultData/>
        },
        
    ]
    return useRoutes(routes)
}