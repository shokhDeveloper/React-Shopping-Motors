import { Btn } from "../../Settings"

export const HeroForm = ({text}) => {
    return(
    <form className="moto__form">
        <input type="text"  className="border-transparent"   placeholder={text}/>
        <Btn className="kupit_btn">искать</Btn>
    </form>
    )
}