import axios from "axios";


const citiesActions={
    getAllCities:()=>{
        return async (dispatch,getState)=>{
            const res = await axios.get("http://localhost:4000/api/cities")
            // console.log(res);
            dispatch({type:"ALLCITIES",payload: res.data.response.cities})
        }
    },
    getOneCity:(id)=>{
        return async (dispatch,getState)=>{
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
            // console.log(res.data.response.itinerary);
            dispatch({type:"ONECITY",payload: res.data.response.itinerary})
    }
   },
    filterCities:(input) => {
        return (dispatch, getState) =>{
            dispatch({type:"FILTERCITIES", payload: input})
        }
    },
    //likes
    likeAndDislike:(id)=>{
        // console.log(id)
        const token= localStorage.getItem("token")
        console.log(token);
        return async()=>{
            try{
                let res= await axios.put(`http://localhost:4000/api/itineraries/like/${id}`, {},
                {
                    headers:{
                        "Authorization":"Bearer "+ token
                    }
                })
                //console.log(res)
                return res

            } catch(error){
               // console.log(error)
            }
        }
    }
    //comentarios

 }
export default citiesActions