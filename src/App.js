import { Home as PublicHome, SignIn, SignUp } from "./Public";
import { Home } from "./Private";
import { useCallback, useContext, useEffect } from "react";
import { Context, GlobalStyle } from "./Settings";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
function App() {
  const selector = useSelector((state) => state.Reducer)
  // let filter = []
  // let result = []
  
  // Iq qushgan holda SERVER ga oson qushib quyish uchun code lar
  // const handleGetTovarsId = useCallback(async () => {
  //   let obj = {}
  //   if(selector.token){
  //     const request = await axios.get(process.env.REACT_APP_SERVER + "/tovars")
  //     const response = await request.data
  //     if(response?.length){
  //       filter = response.filter((item, index) => {
  //         const {name, price, image } = item
  //         obj = {
  //           name, price, image, 
  //           id: index+1
  //         }
  //         result = [...result, obj] 
  //       })
  //       window.localStorage.setItem("filter", JSON.stringify(result.slice(0, 12)))
  //     }
  //   }else{
  //     return false
  //   }
  // },[selector.token])
  // useEffect(() => {
  //   handleGetTovarsId()
  // },[handleGetTovarsId])
  return (
    <div className="App">
      <Routes>
        {selector?.token ? (
          <>
            <Route path="/*" element={<Home />} />
            <Route path="*" element={<Navigate to={"/"} replace={true}/>}/>

          </>
        ) : (
          <>
            <Route path="/*" element={<PublicHome />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="*" element={<Navigate to={"/"} replace={true}/>}/>
          </>
        )}
      </Routes>
      <GlobalStyle/>
    </div>
  );
}

export default App;
