import React from "react";
import logo from "../images/logo.png"
function Fondo(){
    return(
        <div className="Fondo">
          <img className="logoTitulo" src={logo}/>  
          <h1 className="Titulo">MYTYNERARY</h1>
          <div className="parrafo"> 
          <p className="textparrafo">FIND YOUR PERFECT TRIP, DESIGNED BY INSIDERS WHO KNOW AND LOVE THEIR CITIES!</p>
          </div>
        </div>
    )
}
export default Fondo

