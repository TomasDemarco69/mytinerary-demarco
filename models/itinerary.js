const mongoose = require ("mongoose")

const itinerarySchema = new mongoose.Schema ({
    title:{type:String, required:true},
    name:{type:String, required:true},
    userImage:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    hashtags:[{type:String, required:true}],
    likes:{type:Number, required:true},
    activities:{type:String, required:false}
})
const Itinerary = mongoose.model ("itinerary", itinerarySchema)
module.exports = Itinerary