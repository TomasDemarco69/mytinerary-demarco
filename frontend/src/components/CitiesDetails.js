import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import citiesActions from "../redux/actions/citiesActions";
import { useDispatch, useSelector } from 'react-redux'

export default function CitiesDetails(){
    // const {id}=useParams()
    // const [cities,setCities]=useState([])
    const {id}=useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(citiesActions.getAllCities()) 
      // eslint-disable-next-line 
    },[])
   
    useEffect(()=>{
        dispatch(citiesActions.getOneCity(id))
        // eslint-disable-next-line 
    },[])
    
    const cityItinerary = useSelector(store => store.citiesReducers.oneCity)
    console.log(cityItinerary)

    const cities = useSelector(store=>store.citiesReducers.cities)
    let card = cities.filter(city=>city._id===id)

    return(
        <div>
            {card.length>0 && card.map((city,index)=>(
                <div className="contenedorDetails" key="index" style={{background:`url(${city.image})`, height:"63vh", backgroundPosition:"center", backgroundSize:"cover", marginBottom:"1rem", marginTop:"2rem"}}>
                   
                   <h1 className="h1details"> {city.name} </h1> 
                 <div className="parrafoDetails"> 
                    <p>{city.description}</p>
                </div> 
                </div>
            ))}
                <LinkRouter to="/cities" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <button className="Botoncito"> Back to Cities </button>
                </LinkRouter>
                <div>
                
                  {cityItinerary?.map((itinerary,index)=>
                        <div key={index}>
                          <div> 
                            <h3 className="itinerario">{itinerary.title}</h3>
                            <p>{itinerary.name}</p>
                            <img className='imagenUsuario' src={itinerary.userImage} alt="imagen usuario" />
                            <p>{itinerary.price}</p>
                            <p>{itinerary.duration}</p>
                            <p>{itinerary.hashtags}</p>
                            <p>{itinerary.likes}</p>
                            <p>{itinerary.activities}</p>
                             
                        </div>
                        </div>
                    )}
                </div>
        </div>
    )
    
}
