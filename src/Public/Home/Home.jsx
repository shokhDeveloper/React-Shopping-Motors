import "../Public.scss"
import { Header, Loader } from "../../Components";
import { useEffect, useState } from "react";
import { RoutesX } from "../RoutesX";

export const Home = () => {
  const [loader, setLoader] = useState({
    apperence: true
  })
  const handleLoader = () => {
    setLoader({apperence: false})
  }
  useEffect(() => {
    if(loader.apperence){
        setTimeout(handleLoader, 2000)  
    }
  },[loader])
    return (
    <>
      {loader.apperence ? (
        <Loader/>
      ):(
        <>
          <Header />
          <main id="main">
            <RoutesX/>
          </main>
        </>
      )}
    </>
  );
};
