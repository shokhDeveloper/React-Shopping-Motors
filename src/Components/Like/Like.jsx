import "./Like.scss"
import { useCart } from "react-use-cart"
import LikeImg from "../../Settings/assets/images/Not_Like.png"
import ActiveLikeImg from "../../Settings/assets/images/Like.png"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export const Like = ({like, setLike}) => {
    const {items, addItem, removeItem} = useCart()
    const {token} = useSelector((state) => state.Reducer)
    const navigate = useNavigate()
    const inputRef = useRef()
    const moto = {
        name: "DefaultMoto",
        price: 1000,
        id: 1
    }
    useEffect(() => {
        for(let  i = 0; i<items?.length; i++){
            if(items[i].name === moto.name){
                setLike(true)
                inputRef.current.checked = true
            }
        }
    },[like])
    return(
        <input ref={inputRef} onChange={(event) => {
            if(token !== null){
                if(event.target.checked){
                    addItem(moto)
                    setLike(true)
                }else{
                    setLike(false)
                    removeItem( moto.id)
                }
            }else{
                navigate("/sign-in")
            }
        }} type="checkbox" defaultChecked={like} style={{backgroundImage: like ? `url(${ActiveLikeImg})` : `url(${LikeImg})` }}/>
    )
}