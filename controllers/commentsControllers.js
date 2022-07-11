const Itinerary = require("../models/itinerary")

 const commentsControllers = {

    addComment:  async (req, res)=>{ 

        const {itineraryId,comments}=req.body.data
        const user=req.user._id
     
        try{
            const newComment= await Itinerary.findOneAndUpdate(
                {_id:itineraryId},
                {$push: {comments: {comment:comments, userID:user}}},
                {new:true})
            res.json({
                success:true,
                response:{newComment},
                message:"Thanks for leaving your comment!"
            })
        }catch(error){
            console.log(error)
            res.json({
                success:false,
                message:"Something went wrong, please try again later"})
        }
    },
    modifyComment:   async (req, res)=>{
        const {commentId, comment}= req.body.commentModify
     
        try{
            const modifyComment= await Itinerary.findOneAndUpdate(
                {"comments._id":commentId},
                {$set: {"comments.$.comment":comment}}, 
                {new:true})
            res.json({
                success:true,
                response:{modifyComment},
                message:"Your comment was modified successfully!"
            })
        }catch(error){
            console.log(error)
            res.json({
              success:true, 
              message:"Something went wrong, please try again later"})
        }
    },
    deleteComment:   async (req, res) => {

        const id =req.params.id

        try{
            const deleteComment= await Itinerary.findOneAndUpdate(
                {"comments._id":id},
                {$pull: {comments:{_id:id}}}, 
                {new:true})

            res.json({
                success:true,
                response:{deleteComment},
                message:"Your comment was deleted successfully!"
            })
        }catch(error){
            console.log(error)
            res.json({
                success:false, 
                message:"Something went wrong, please try again later"})
        }
    }
 }
  module.exports = commentsControllers