import { useEffect, useRef, useState } from "react"
import { Input } from "../../Components"
import "./Modal.scss"
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../Redux/Settings";
export const Modal = ({title, children, modal, error}) => {
    let idx = 0;
    const {textErrorModal} = useSelector((state) => state.Reducer )
    const dispatch = useDispatch()
    const pRef = useRef()  
    const handleTyping = () => {
        if(idx < textErrorModal.length){
            idx++
            document.querySelector(".error__text").innerHTML += textErrorModal.charAt(idx-1)
            setTimeout(handleTyping, 100)
        }else{
            setTimeout(() => {
                dispatch(Action.setErrorModal(false))
                window.location.reload()
            }, 2000);
        }
    }
    const handleClick = () => {
        if(idx === textErrorModal.length && error){
            dispatch(Action.setErrorModal(false))
            window.location.reload()
        }
    }
    useEffect(() => {
        if( idx < textErrorModal.length && modal  && error  ){
            document.querySelector(".error__text").innerHTML = null
            handleTyping()
        }else{

        }
    }, [modal, idx, error])
    return(
        <div className="modal__overlay" style={{display: modal ? "flex": "none"}}>
            <div className="modal">
                <div className="modal__header">
                    <h2>{title}</h2>
                    <button onClick={handleClick} className="border-transparent">&times;</button>
                </div>
                <div className="modal__body">
                    {error ? (
                        <>
                            <p ref={pRef} className="error error__text">
                                
                            </p>
                        </>  
                    ): (
                        <>
                            {children}
                        </>
                    )}
                </div>               
            </div>
        </div>
    )
}