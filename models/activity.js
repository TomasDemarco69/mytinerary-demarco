const mongoose = require('mongoose') 

const activitySchema = new mongoose.Schema ({
    activityName: {type:String, required:true},
    photoAct: {type:String, required:true}
})

const Activity = mongoose.model('activities',activitySchema) 
module.exports = Activity 

