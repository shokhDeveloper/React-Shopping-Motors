import { Input } from "../../Components"
import "./Modal.scss"
export const Modal = ({title, children, modal}) => {
    return(
        <div className="modal__overlay" style={{display: modal ? "flex": "none"}}>
            <div className="modal">
                <div className="modal__header">
                    <h2>{title}</h2>
                    <button className="border-transparent">&times;</button>
                </div>
                <div className="modal__body">
                    {children}
                </div>               
            </div>
        </div>
    )
}