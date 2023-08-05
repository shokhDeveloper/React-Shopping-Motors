import "./Admin.scss";
import axios from "axios"
import { useCallback, useRef } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"

export const Admin = () => {
    const state = useSelector(state => state.Reducer)
    const handleGetAdmin = useCallback(async () => {
    const request = await axios.get(process.env.REACT_APP_SERVER + "/admin")
    const response = await request.data
    return response
   },[state.user.id])
   const {data} = useQuery("/admin", handleGetAdmin)
   const checkRef = useRef()
   const handleChange = async (event,index) => {
        const request = await axios.put(process.env.REACT_APP_SERVER + `/admin/${index}`, {
            name: data[index-1].name,
            private: event.target.checked,
            id: index
        })
        const response = await request.data
        console.log(response)
   }
   return(
        <div className="admin">
            <div className="container">
                <h1 className="admin__title">
                    Admin Panel
                </h1>
                <div className="table__container">
                <table style={{borderCollapse: "collapse", border: "1px solid black"}}>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>NAME</th>
                            <th>PRIVATE</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        {data?.map((item, index) => {
                            return(
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td><input ref={checkRef} type="checkbox" defaultChecked={item.private ? true: false } onChange={(event) => handleChange(event,index+1)} /></td>                                            
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={3}>
                                SHOP MOTO
                            </th>
                        </tr>
                    </tfoot>
                </table>
                </div>
            </div>
        </div>
    )
}