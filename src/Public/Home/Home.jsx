import "../Public.scss"
import { Header, Loader } from "../../Components";
import { useEffect, useState } from "react";
import { RoutesX } from "../RoutesX";
import { getItem, setItem } from "../../Settings";

export const Home = () => {
  const [loader, setLoader] = useState({
    apperence: true
  })
  const handleLoader = () => {
    setLoader({apperence: false})
    setItem("loader", true)
  }
  useEffect(() => {
    if(loader.apperence){
        setTimeout(handleLoader, 2000)  
    }
  },[loader])
    return (
    <>
      {loader.apperence && getItem("loader") === null ? (
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
