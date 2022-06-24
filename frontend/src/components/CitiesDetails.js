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
    const price = []
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
                <div className="contenedorItinerario">
                
                  {cityItinerary?.map((itinerary,index)=>
                        <div key={index}>
                          <div className="Itinerario"> 
                          <div className="ImageUserItinerary">
                            <p className="textItinerary"> {itinerary.name}</p>
                            <img className='imagenUsuario' src={itinerary.userImage} alt="imagen usuario" />
                            </div>
                            <h3 className="textItineraryTitle">{itinerary.title}</h3>
                            <div className="">
                            <div className="datosItineraryDer">
                            <p className="textItinerary">Duration: {itinerary.duration}</p>
                            <p className="textItinerary">Likes: {itinerary.likes}</p>
                            <div className="priceItinerary" key={price} > Price: 
                            <span key={price} > {Array(itinerary.price).fill(itinerary.price).map((price,index)=>{
                                return(
                                    <h1 key={index} className="billetito">💵</h1>
                                )
                            })} </span>
                            
                            </div>
                            </div>
                            <p className="textItineraryHashtags"> {itinerary.hashtags}</p>
                            <p className="textItinerary">{itinerary.activities}</p>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
                <LinkRouter to="/cities" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <button className="Botoncito"> Back to Cities </button>
                </LinkRouter>
        </div>
    )  
}