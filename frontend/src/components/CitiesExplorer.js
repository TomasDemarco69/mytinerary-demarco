import React from "react";
import { useEffect} from "react";
import {Link as LinkRouter} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from "../redux/actions/citiesActions"

export default function CitiesExplorer(){

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(citiesActions.getAllCities()) 
      // eslint-disable-next-line 
    },[])
         
    const cityFiltered = (event)=>{
        dispatch(citiesActions.filterCities(event.target.value))
    }
   const filtered = useSelector(store=> store.citiesReducers.filterCities)
    
    return(
        <>
            <div className="CtnDetalles">
            <div> 
            <input className="searchExplorer" placeholder="Search your place " type="text" onKeyUp={cityFiltered}/>
            </div>
                {filtered?.length>0 ? filtered?.map(city=>(
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

