import React from "react";
import {Link as LinkRouter} from "react-router-dom"

function Boton(){
    return(
        <div className="boton-ctn"> 
        <LinkRouter to="/Cities">  
        <button className="Botoncito">
           <span>¡Discover the world!</span>
         </button>
         </LinkRouter>
         </div>
    )
}
export default Boton
