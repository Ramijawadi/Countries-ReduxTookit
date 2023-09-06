import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MaterialUISwitch } from "./Switcher";



//mui switch


const Header = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    let mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("dark");
  };
  return (
    <>
      <header className="header">
      
        {!darkTheme ? (
          // <div className="theme-light hidden" onClick={handleTheme}>
          //   <i className="fa-solid fa-moon"></i>
          //   <p>Dark Mode</p>
          // </div>
          <>
          <h1 className="title-dark">Welcome in The world </h1>
          <MaterialUISwitch onClick={handleTheme}  />
          
          </>
        ) : (
           <>
             <h1 className="title">Welcome in The world </h1>
          <MaterialUISwitch onClick={handleTheme}  />
        
        
          </>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
