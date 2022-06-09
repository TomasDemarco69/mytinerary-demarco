import React from "react";
import "./styles/index.css"
import ResponsiveAppBar from "./components/Bienvenida";
import Index from "./paginas/Index"
import Error from "./paginas/Error"
import Cities from "./paginas/Cities"
import {Routes,Route} from "react-router-dom"
// import Footer from "./components/Footer"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
     <ResponsiveAppBar/>
     <Routes>
       <Route path = "/index" element = {<Index/>} />
       <Route path = "/Home" element = {<Index/>} />
       <Route path = "/" element = {<Index/>} />
       <Route path = "/Cities" element = {<Cities/>}/>
       <Route path = "/*" element = {<Error/>}/>
     </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
