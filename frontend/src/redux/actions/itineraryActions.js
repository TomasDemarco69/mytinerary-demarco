import axios from "axios";


const itineraryActions={
    getAllItineraries:()=>{
        return async (dispatch,getState)=>{
            const res = await axios.get("http://localhost:4000/api/itineraries")
            dispatch({type:"itineraries",payload: res.data.response})
        }
    }
}
export default itineraryActions