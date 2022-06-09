import React from "react";
import {Link as LinkRouter} from "react-router-dom";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Button } from "@mui/material";
// import Instagram from "../images/logoig";
// import Facebook from "../images/logofb";
// import WhatsApp from "../images/logowp";


function Footer(){
    return(
        <footer className="contenedorFooter">

    <LinkRouter to ="/index">
                <button className="boton-footer">
                   Home
                </button>
            </LinkRouter>
            <LinkRouter to ="/Cities">
                <button className="boton-footer">
                   Cities
                </button>
            </LinkRouter>
        {/* <div className="contenedorfooter">
            <div className="footericonos">
            <a href="">
            <img className="logoig" src={Instagram} alt="instagram"/>
          </a>
          <a href="">
            <img className="logofb" src={Facebook} alt="facebook"/>
          </a>
          <a href="">
         <img className="logowp" src={WhatsApp} alt="whatsapp"/>
        </a>
            </div>
            <div className="footertexto">
                <h2>MyTinerary</h2>
    
            </div>
    
        </div>  */}
    </footer>
    )
}
export default Footer

