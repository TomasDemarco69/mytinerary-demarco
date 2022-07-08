import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import citiesActions from "../redux/actions/citiesActions";
import { useDispatch, useSelector } from 'react-redux';
import Collapsible from "react-collapsible";
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CitiesDetails(){
    // const {id}=useParams()
    // const [cities,setCities]=useState([])
    const {id}=useParams()
    const dispatch = useDispatch()
    const [reload, setReload]=useState(false)

    useEffect(()=>{
      dispatch(citiesActions.getAllCities()) 
      // eslint-disable-next-line 
    },[])
    //like dislike
    useEffect(()=>{
        dispatch(citiesActions.getOneCity(id))
        //eslint-disable-next-line
    },[reload])
    
    const cityItinerary = useSelector(store => store.citiesReducers.oneCity)
    // console.log(cityItinerary)

    const cities = useSelector(store=>store.citiesReducers.cities)
    // console.log(cities);
    let card = cities.filter(city=>city._id===id)
    const price = []

    async function likeOrDislike(idItinerario){
        console.log(idItinerario)
        const res=await dispatch(citiesActions.likeAndDislike(idItinerario))
        console.log(res.data.response)
        setReload(!reload)
    }
    const user=useSelector(store=>store.userReducer.user)
    return(
        <div>
            {card.length>0 && card.map((city,index)=>(
                <div className="contenedorDetails" key={index} style={{background:`url(${city.image})`, height:"63vh", backgroundPosition:"center", backgroundSize:"cover", marginBottom:"1rem", marginTop:"2rem"}}>
                   
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
                         
                            <div className="likes">
                                {user ?
                                <> 
                                <button className="button-like" onClick={()=>likeOrDislike(itinerary._id)}>
                                    {itinerary.likes?.includes(user.id) ? 
                                    (<div style={{color:"red"}}>
                                        <FavoriteIcon id={itinerary._id} sx={{cursor:'pointer'}}/>
                                    </div>) :
                                    (<div  style={{color:"red"}}>
                                        <FavoriteBorderIcon id={itinerary._id} sx={{cursor:'pointer'}}/>
                                    </div>)}
                                    {itinerary?.likes.length}
                               </button>  
                               </>
                               : (
                                <button className="buttonLike">
                                    <FavoriteBorderIcon id={itinerary._id} sx={{cursor:'pointer'}}/>
                                </button>
                               )   
                            }
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
                        <Collapsible trigger="View Activities" triggerWhenOpen="Close" transitionTime="1000" transitionCloseTime="100" className="view-more">
                        <div style={{height:"40vh"}}>
                            {itinerary.activities.map((activity,index)=>(

                                <div key={index}> 
                                 <h1>{activity.activityName}</h1>
                                 <img src={activity.photoAct} style={{width:"5rem"}} alt="photoActivity"/>


                                </div> 

                                
                                ))}
                                
                                
                        </div>
                        </Collapsible>
                        </div>
                    )}
                </div>
                <LinkRouter to="/cities" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <button className="Botoncito"> Back to Cities </button>
                </LinkRouter>
        </div>
    )  
}