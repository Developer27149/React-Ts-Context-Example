import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Total from "routes/total";
import Home from "routes/home";
import { rootReducer } from "contexts/root/reducer";
import { initState, RootContextProvider } from "contexts/root/context";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initState);

  return (
    <RootContextProvider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="navs">
          <Link to={"/"}>Home</Link>
          <Link to={"/total"}>Total</Link>
        </div>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/total"} element={<Total />} />
        </Routes>
      </BrowserRouter>
    </RootContextProvider>
  );
}

export default App;
