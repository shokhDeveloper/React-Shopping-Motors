import { useEffect } from "react";
import { DalsheBtn } from "../../Settings";
import { useNavigate } from "react-router-dom";

export const Artickle = () => {
  const navigate = useNavigate()
  const handleClick = (event) => {
    if(event.target.getAttribute("class").includes("gidrosikleBtn")){
        navigate("/Гидроциклы")
    }else {
        return false
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  },[])
  return (
    <article>
      <div className="container">
        <div className="article__items">
          <div className="article__images"></div>
          <h3 className="article__title">CКИДКИ на все запчасти до 70%</h3>
          <div className="article__element">
          <DalsheBtn className="border-transparent gidrosikleBtn">ПОСМОТЕТЬ ВСЕ</DalsheBtn>        
          </div>
        </div>
      </div>
    </article>
  );
};
