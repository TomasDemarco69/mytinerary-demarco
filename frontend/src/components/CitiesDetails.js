import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import citiesActions from "../redux/actions/citiesActions";
import { useDispatch, useSelector } from 'react-redux';
import Collapsible from "react-collapsible";
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import commentsActions from "../redux/actions/commentsActions";
import Comments from "../components/Comments";
import Swal from 'sweetalert2';

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
    console.log(cityItinerary)

    const cities = useSelector(store=>store.citiesReducers.cities)
    //console.log(cities);
    let card = cities.filter(city=>city._id===id)
    const price = []
    const user=useSelector(store=>store.userReducer.user)
    const [text, setText]= useState("")

    async function likeOrDislike(idItinerario){
        console.log(idItinerario)
        const res=await dispatch(citiesActions.likeAndDislike(idItinerario))
        console.log(res.data.response)
        setReload(!reload)
    }
    // addComment

    async function addComment(id){
        const data={
            itinerary:id,
            comments:text
        }
        await dispatch(commentsActions.addComment(data))
        setReload(R=>!R)
        setText("")
    }
    const viewAlert=()=>{
        Swal.fire({
            icon:"error",
            title:"Sorry, you must log in ",
            timer:1500
        })
    }
    return (
        <div className="ctnItinerarioPagina">
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
                            <div className="adad">
                              <div className="datosItineraryDer">
                                <p className="textItinerary">Duration: {itinerary.duration}</p>
                                   <div className="priceItinerary" key={price} > Price: 
                                     <span key={price} > {Array(itinerary.price).fill(itinerary.price).map((price,index)=>{
                                      return(
                                     <h1 key={index} className="billetito">💵</h1>
                                      )
                                     })} 
                                     </span>
                            
                                  </div>
                                </div>
                                <p className="textItineraryHashtags"> {itinerary.hashtags}</p>
                            </div>

                        </div>
                        <Collapsible trigger="View Activities" triggerWhenOpen="Close" transitionTime="1000" transitionCloseTime="100" className="view-more">
                        <div className="ActivityContenedor">

                            {itinerary.activities?.map((activity,index)=>(
                                <div className="ContenedorAct" key={index}> 
                                 <h1 className="ActivityName">{activity.activityName}</h1>
                                 <img className="ActivityPhoto" src={activity.photoAct} alt="photoActivity"/>
                                </div> 
                                ))}
                        </div>

                        <div className="commentWall">
                            <p style={{color:"BLACK"}}>COMMENTS({itinerary.comments.length})</p>
                            {itinerary?.comments.map((comment)=>
                            <Comments comment={comment} key={comment._id} setReload={setReload} />
                             )}
                             {user?
                             <div className="ctntextbutton">
                                <div className="textcomment" contentEditable onInput={(event)=>setText(event.currentTarget.textContent)}></div>
                                <button className="sendbutton" onClick={()=>addComment(itinerary._id)}>Send</button>
                              </div> 
                               :
                               <div className="ctntextbutton">
                                <div className="textcomment" contentEditable sx={{width:"80%", backgroundColor:"white"}}></div>
                                <button className="sendbutton" onClick={()=>viewAlert()}>Send</button>
                                </div>

                             }
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