import React from "react";
import {BrowserRouter} from "react-router-dom"
import Header from "./combonants/header/header";
import Home_page from "./combonants/home-page/home-page";
import Sidebar_Contact from "./combonants/SideBar/Sidebar";
import "./combonants/main-style/style.scss"





const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Home_page/>
        <Sidebar_Contact/>
      </BrowserRouter>
    </>
  )
}

export default App 
