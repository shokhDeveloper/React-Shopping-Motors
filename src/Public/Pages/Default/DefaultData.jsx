import "./DefaultSettingsLinks.scss"
import { Btn } from "../../../Settings"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const DefaultData = () => {
    const {token} = useSelector((state) => state.Reducer)
    const navigate = useNavigate()

    return(
        <ul className="default_data">
            <li className="default_data__title">
                <p><strong>Адрес</strong></p>
                <p><strong>Режим работы</strong></p>
                <p><strong>Доступно</strong></p>
                <p><strong>Количество</strong></p>
            </li>
            <li>
                <p><small>Москва, ул. Науки 25  </small></p>    
                <div>
                <p><small>пн-сб: 08:00-19:00</small></p>
                <p><small>вс: 09:00-17:00</small></p>
                </div>
                <p><small>В наличии</small></p>
                <p><small>1</small></p>
                <div>

                <Btn onClick={() => {
                  if(token !== null){
                    return true
                  }else{
                    navigate("/sign-in") 
                  }
                }}  className="kupit_btn">КУПИТЬ</Btn>
                </div>
            </li>
            <li>
                <p><small>Москва, ул. Науки 25  </small></p>
                <div>
                <p><small>пн-сб: 08:00-19:00</small></p>
                <p><small>вс: 09:00-17:00</small></p>
                </div>
                <p><small>В наличии</small></p>
                <p><small>1</small></p>
                <div>
                <Btn onClick={() => {
                  if(token !== null){
                    return true
                  }else{
                    navigate("/sign-in") 
                  }
                }}  className="kupit_btn">КУПИТЬ</Btn>
                </div>
            </li>
            <li>
                <p><small>Москва, ул. Науки 25  </small></p>
                <div>
                <p><small>пн-сб: 08:00-19:00</small></p>
                <p><small>вс: 09:00-17:00</small></p>
                </div>
                <p><small>В наличии</small></p>
                <p><small>1</small></p>
                <div>
                <Btn onClick={() => {
                  if(token !== null){
                    return true
                  }else{
                    navigate("/sign-in") 
                  }
                }} className="kupit_btn">КУПИТЬ</Btn>
                </div>
            </li>
            <li>
                <p><small>Москва, ул. Науки 25  </small></p>
                <div>
                <p><small>пн-сб: 08:00-19:00</small></p>
                <p><small>вс: 09:00-17:00</small></p>
                </div>
                <p><small>В наличии</small></p>
                <p><small>1</small></p>
                <div>

                <Btn onClick={() => {
                  if(token !== null){
                    return true
                  }else{
                    navigate("/sign-in") 
                  }
                }} className="kupit_btn">КУПИТЬ</Btn>
                </div>
            </li>
        </ul>
    )
}