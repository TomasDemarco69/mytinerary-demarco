import axios from "axios";


const citiesActions={
    getAllCities:()=>{
        return async (dispatch,getState)=>{
            const res = await axios.get("http://localhost:4000/api/cities")
            console.log(res);
            dispatch({type:"ALLCITIES",payload: res.data.response.cities})
        }
    },
    getOneCity:(id)=>{
        return async (dispatch,getState)=>{
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
            console.log(res.data.response.itinerary);
            dispatch({type:"ONECITY",payload: res.data.response.itinerary})
    }
   },
    filterCities:(input) => {
        return (dispatch, getState) =>{
            dispatch({type:"FILTERCITIES", payload: input})
        }
    }

 }
export default citiesActions