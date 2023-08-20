import "./Gidro.scss"
import axios from "axios"
import { useCallback, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { DalsheBtn, KorzinaBtn } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Action } from "../../Settings/Redux/Settings"
import { Bar } from "./Bar"
import { Like } from "../../Components/Like"
import Korzina from "../../Settings/assets/images/Korzina.png"
export const GidroFilter = () => {
    const {gidroText, user, filter_data, tovarsAll, korzina} = useSelector((state) => state.Reducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleKey = (event) => {
    if(event.keyCode === 27){
        navigate(-1)
    }
   }
   useEffect(() => {
    window.addEventListener("keyup", handleKey)
    return () => window.removeEventListener("keyup", handleKey)
   },[])
   const url = process.env.REACT_APP_SERVER + "/car"
   const handleFilterCar = useCallback(async () => {
    const request = await axios.get(url)
    const response = await request.data
    dispatch(Action.setFilterCar(response))
   },[user.id])
   useEffect(() => {
    handleFilterCar()
   },[handleFilterCar])
   const handleAddKorzina = id => {
    try{
        let find = tovarsAll?.find(item => item.id === id)
        dispatch(Action.setKorzina(find))
    }catch(error){
        return error
    }
   }
   return(
        <div className="gidro__filter">
            <h2 className="gidro__title">Гидроциклы</h2>
            <div className="gidro_filter__items">
                <div className="gidro_filter__child">
                    <p>Полноприводные</p>
                    <p>от 5000</p>
                    <p>BRP</p>  
                    {gidroText ? (
                        <>
                        <p>Полноприводные</p>
                        <p>от 5000</p>
                        <p>BRP</p>
                    
                        </>
                    ): (
                        <DalsheBtn onClick={() => dispatch(Action.setTextGidro(true)) } className="border-transparent" variant={"small"} >еще</DalsheBtn>
                    
                    )}
                </div>
                <div className="gidro_filter__child">
                    <select className="border-transparent" defaultValue={"default"}>
                        <option selected disabled value="default">По полулярности</option>
                        <option value="">По <span style={{textTransform: "lowercase"}}>поПулярности</span> </option>
                    </select>
                </div>
            </div>
            <div className="gidro_filter__elements">
                <div className="gidro_filter__bar">
                    <Bar/>
                </div>
                <div className="gidro_filter__tovars">
                    {filter_data?.length ? (
                        <>
                            {filter_data?.map(item => {
                                const {image, name, apperence, price, id} = item
                                const img = image?.oneX ? image.oneX : image
                                return(
                                    <div className="gidro__tovar" key={id}>
                                        <div className="gidro_tovar__header">
                                            <Like item={item} />

                                        </div>
                                        <div className="gidro_tovar__body">
                                            <img src={img} width={300}
                                            height={200} alt={name} />
                                            {apperence ? (
                                                <>
                                                    <h3>{name}</h3>
                                                    <p>
                                                        <strong>нет в наличии</strong>
                                                    </p>
                                                </>
                                            ): (
                                                <>
                                                <h3>{name}</h3>
                                                <h3>{price}</h3>
                                              </>
                                            )}
                                            <div className="gidro_tovar__shop">
                                                <NavLink to={`/tovar/${id}`}>посмотреть товар</NavLink>
                                            </div>
                                        </div>
                                        <div className="gidro_tovar__footer">
                                            <KorzinaBtn onClick={() => handleAddKorzina(id) } style={{backgroundImage: `url(${Korzina})`}}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ): <h2 className="error">Bunday tovar mavjud emas</h2>}
                </div>
            </div>
        </div>
    )
}