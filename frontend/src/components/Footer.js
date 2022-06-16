import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import instagram from "../images/logoig.png";
import facebook from "../images/logofb.png";
import whatsApp from "../images/logowp.png";

function Footer(){
    return(
        <footer className="contenedorFooter">

                <div className="footericonos">
            <a href="https://www.instagram.com/">
            <img className="logofooter" src={instagram} alt="instagram"/>
          </a>
          <a href="https://www.facebook.com/">
            <img className="logofooter" src={facebook} alt="facebook"/>
          </a>
          <a href="https://web.whatsapp.com/">
         <img className="logofooter" src={whatsApp} alt="whatsapp"/>
        </a>
            </div>
       <div className="botonesFooterToTop"> 
    <LinkRouter to ="/index">
                <button className="boton-footer">
                   Home
                </button>
            </LinkRouter>
            <LinkRouter to ="/cities">
                <button className="boton-footer">
                   Cities
                </button>
            </LinkRouter>
                </div>
            <div className="footertexto">
                <h2>MyTinerary |By Tomás Demarco</h2>
    
            </div>
       
    </footer>
    )
}
export default Footer

