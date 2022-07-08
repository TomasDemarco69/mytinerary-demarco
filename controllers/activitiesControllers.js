const Activity = require("../models/activity")

const activitiesControllers = {
    getActivities: async (req, res) => { 
    let activities
    let error = null
    try{
        activities = await Activity.find()
        console.log(activities)
    } catch (err){error = err}
    res.json({
        response: error ? "ERROR": { activities },
        succes: error ? false : true,
        error: error
    })
},
getOneActivity: async (req, res) => {
    const id = req.params.id
    let activity 
    let error = null
    try{
        activity = await Activity.findOne({_id: id})
    } catch (err) { error = err}
    res.json({
        response: error ? "ERROR" : activity,
        success: error ? false : true,
        error: error
    })
},
addActivity: async (req, res)=>{
    let activity
    let error=null 
   
    const{ activityName,photoAct}= req.body.data
    try{
        activity= await new Activity({
            activityName: activityName,
            photoAct:photoAct
        }).save()
    }catch(err){
        error= err
        console.log(error);
    }
     
    res.json({
    response: error ? 'ERROR' : activity,
    success: error ? false : true,
    error: error
    })
},
modifyActivity: async (req,res)=>{
    const id = req.params.id
    const activities = req.body.data
    let activity 
    let error = null
    try{
        activity = await Activity.findOneAndUpdate({_id:id}, activities, {new:true})
    }catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : activity,
        success: error ? false : true,
        error: error
    })
},
removeActivity: async (req,res) => {
    const id = req.params.id
    let activity
    let error = null
    try {
        activity = await Activity.findOneAndDelete({_id: id})
    } catch (err) { error = err}
    res.json ({
        response: error ? "ERROR" : activity,
        success: error ? false : true,
        error: error
    })
  }
}
module.exports = activitiesControllers