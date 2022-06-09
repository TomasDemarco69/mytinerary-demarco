import React from "react";
import Bienvenida from "./components/Bienvenida"
import "./styles/index.css"
import {Routes,Route} from "react-router-dom"
import ResponsiveAppBar from "./components/Bienvenida";

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
     <Bienvenida/>
     <Routes>
       <Route path = "/index" element = {<Index/>} />
       <Route path = "Home" element = {<Index/>} />
       <Route path = "/" element = {<Index/>} />
       <Route path = "/Ciudades" element = {<Ciudades/>}/>
       <Route path = "/*" element = {<Error/>}/>
     </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;
