import React from "react";
import "./styles/index.css"
import ResponsiveAppBar from "./components/Welcome";
import Index from "./paginas/Index"
import Error from "./paginas/Error"
import Cities from "./paginas/Cities"
import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import CitiesDetails from "./components/CitiesDetails";

function App() {
  return (
    <div className="app">
     <ResponsiveAppBar/>
     <Routes>
       <Route path = "/index" element = {<Index/>} />
       <Route path = "/Home" element = {<Index/>} />
       <Route path = "/" element = {<Index/>} />
       <Route path = "/cities" element = {<Cities/>}/>
       <Route path = "/*" element = {<Error/>}/>
       <Route path = "/city/:id" element = {<CitiesDetails/>}/>
     </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
