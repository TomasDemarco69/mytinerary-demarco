const Itinerary = require("../models/itinerary")

const itineraryControllers = {
    getItineraries: async (req, res) => { 
    let itineraries
    let error = null
    try{
        itineraries = await Itinerary.find()
        console.log(itineraries)
    } catch (err){error = err}
    res.json({
        response: error ? "ERROR": { itineraries },
        succes: error ? false : true,
        error: error
    })
},
getOneItinerary: async (req, res) => {
    const id = req.params.id
    let itinerary
    let error = null
    try{
        itinerary = await Itinerary.findOne({_id: id})
    } catch (err) { error = err}
    res.json({
        response: error ? "ERROR" : itinerary,
        success: error ? false : true,
        error: error
    })
},
addItinerary: async (req, res)=>{
    let itinerary
    let error=null 
   
    const{title,name,userImage,price,duration,hashtags,likes}= req.body.data
    try{
        itinerary= await new Itinerary({
            title: title, 
            name: name,
            userImage: userImage,
            price: price,
            duration: duration,
            hashtags: hashtags,
            likes: likes
        }).save()
    }catch(err){
        error= err}
   
    res.json({
    response: error ? 'ERROR' : itinerary,
    success: error ? false : true,
    error: error
    })
},
modifyItinerary: async (req,res)=>{
    const id = req.params.id
    const itinerary = req.body.data
    let itineraryX 
    let error = null
    try{
        itineraryX = await Itinerary.findOneAndUpdate({_id:id}, itinerary, {new:true})
    }catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : itinerary,
        success: error ? false : true,
        error: error
    })
},
removeItinerary: async (req,res) => {
    const id = req.params.id
    let itinerary
    let error = null
    try {
        itinerary = await Itinerary.findOneAndDelete({_id: id})
    } catch (err) { error = err}
    res.json ({
        response: error ? "ERROR" : itinerary,
        success: error ? false : true,
        error: error
    })
  }
}
module.exports = itineraryControllers