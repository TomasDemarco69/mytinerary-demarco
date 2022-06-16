import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";

export default function CitiesDetails(){
    const {id}=useParams()
    const [cities,setCities]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/api/cities")
        .then((datos)=>setCities(datos.data.response.cities))
    },[])

    let city = cities.filter(city=>city._id===id)

    return(
        <div>
            {city.length>0 && city.map((city,index)=>(
                <div className="contenedorDetails" key="index" style={{background:`url(${city.image})`, height:"63vh", backgroundPosition:"center", backgroundSize:"cover", marginBottom:"1rem", marginTop:"2rem"}}>
                   
                   <h1 className="h1details"> {city.name} </h1> 
                 <div className="parrafoDetails"> 
                    <p>{city.description}</p>
                </div> 
                </div>
            ))}
        </div>
    )

}
