import axios from "axios"
import { useEffect } from "react"

export const GidroFilter = () => {
   
    return(
        <div className="gidro__filter">
            <h2 className="gidro__title">Гидроциклы</h2>
            <div className="gidro_filter__items">
                <div className="gidro_filter__child">
                    <p>Полноприводные</p>
                    <p>от 5000</p>
                    <p>BRP</p>
                </div>
                <div className="gidro_filter__child">
                    <select defaultValue={"default"}>
                        <option selected disabled value="default">По полулярности</option>
                        <option value="">По <span style={{textTransform: "lowercase"}}>поПулярности</span> </option>
                    </select>
                </div>
            </div>
        </div>
    )
}