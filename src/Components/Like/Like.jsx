import "./Like.scss"
import { useCart } from "react-use-cart"
import LikeImg from "../../Settings/assets/images/Not_Like.png"
import ActiveLikeImg from "../../Settings/assets/images/Like.png"
import { useEffect, useRef, useState } from "react"
export const Like = ({like, setLike}) => {
    const {items, addItem, removeItem} = useCart()
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
            if(event.target.checked){
                addItem(moto)
                setLike(true)
            }else{
                setLike(false)
                removeItem( moto.id)
            }
        }} type="checkbox" defaultChecked={like} style={{backgroundImage: like ? `url(${ActiveLikeImg})` : `url(${LikeImg})` }}/>
    )
}