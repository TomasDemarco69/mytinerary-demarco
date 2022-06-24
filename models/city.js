const mongoose = require ("mongoose")

const citySchema = new mongoose.Schema ({
    name:{type:String, require:true},
    country:{type:String, require:true},
    description:{type:String, require:true},
    image:{type:String, require:true},
    itinerary:[{type:mongoose.Types.ObjectId, ref:"itinerary"}]
})
const City = mongoose.model ("cities", citySchema)
module.exports = City