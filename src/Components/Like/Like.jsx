import "./Like.scss"
import { useCart } from "react-use-cart"
import LikeImg from "../../Settings/assets/images/Not_Like.png"
import ActiveLikeImg from "../../Settings/assets/images/Like.png"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getItem, setItem } from "../../Settings"
import axios from "axios"
export const Like = ({item}) => {
    const [like, setLike] = useState(false)
    const {addItem, removeItem, items} = useCart()
    const inputRef = useRef()
    useEffect(() => {
            for(let i = 0; i<items.length; i++){
                if(items[i].id === item.id){
                    setLike(true)
                    inputRef.current.checked = true
                }
            }
    },[like])
    return(
        <input className="like" ref={inputRef} onChange={(event) => {
            console.log(item)
            if(event.target.checked){
                addItem(item)
            }else{
                setLike(false)
                removeItem(item.id)
            }
        }} type="checkbox" defaultChecked={like} style={{backgroundImage: like ? `url(${ActiveLikeImg})` : `url(${LikeImg})` }}/>
    )
}