import "./Loader.scss";
import { ThreeDots } from "react-loader-spinner"
export const Loader = () => {
    return(
        <div className="loader">
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color={["black", "blue"]} 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />
        </div>
    )
}