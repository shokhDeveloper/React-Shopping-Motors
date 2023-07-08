import { Home as PublicHome } from "./Public";
import { Home } from "./Private";
import { useContext } from "react";
import { Context, GlobalStyle } from "./Settings";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  const { token } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to={<Home/>} replace={true}/>}/>
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicHome />} />
            <Route path="*" element={<Navigate to={<Home/>} replace={true}/>}/>
          </>
        )}
      </Routes>
      <GlobalStyle/>
    </div>
  );
}

export default App;
