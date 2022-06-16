import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link as LinkRouter} from "react-router-dom";

export default function CitiesExplorer(){
    const [cities,setCities]=useState([])
    const [search,setSearch]=useState("")
    const [filter,setFilter]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/api/cities")
        .then((datos)=>setCities(datos.data.response.cities))
        
    },[])
    console.log(cities);
    useEffect(()=>{
       let citiesFilter = cities?.filter(city=>city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
       setFilter(citiesFilter) 
    },[search,cities])
    
    return(
        <>
            <div className="CtnDetalles">
            <div> 
            <input className="searchExplorer" placeholder="Search your place " type="text" onKeyUp={(e)=>{
                setSearch(e.target.value)
            }}/>
            </div>
                {filter.length>0 ? filter.map(city=>(
                    <div className="ContenedorExplorer" key={city._id} style={{background:`url(${city.image})`, height:"40vh", width:"100%", backgroundPosition:"center", backgroundSize:"cover", marginBottom:"1rem", marginTop:"2rem"}}>

                        <h1 className="h1explorer"> {city.name}  </h1>
                       <LinkRouter to={`/city/${city._id}`}>  
                        <button className="Botoncito BotoncitoDetails">
                        <span>See Details</span>
                     </button>
                     </LinkRouter>
                    </div>

                )):<h2 className="">CITY NOT FOUND</h2>}
            </div>
        </>
    )
    
}

