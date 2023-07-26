import { Home as PublicHome, SignIn, SignUp } from "./Public";
import { Home } from "./Private";
import { useContext } from "react";
import { Context, GlobalStyle } from "./Settings";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const selector = useSelector((state) => state.Reducer)
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
