import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import commentsActions from "../redux/actions/commentsActions";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { Avatar } from "@mui/material";




export default function Comments({comment, setReload}){
    const dispatch= useDispatch()
    const [modify,setModify]=useState()
    const user= useSelector(store=>store.userReducer.user)

    async function modifyComment(id){
        const commentModify={
            commentId:id,
            comment:modify
        }
        await dispatch(commentsActions.modifyComment(commentModify))
        setReload(R=>!R)
    }
    async function deleteComment(id){
        await dispatch(commentsActions.deleteComment(id))
        setReload(R=>!R)
    }
    

return(
    <>

    {comment.userId?._id !== user?.id ?
            <div className="ctn-comment">

                <div className="usercomment" >
                    <Avatar src={comment.userId.imageUser} alt="UserImage"/>
                   <p className="username">{comment.userId.name}, {comment.userId.lastName}</p>
                 </div>

               <div className="centertext">
                 <div className="Text">{comment.comment}</div>
                </div>

           </div>:
        <div className="ctn-texto">  

                <div className="usercomment" >
                     <Avatar src={comment.userId.imageUser} alt="UserImage"/>
                     <p className="username">{comment.userId.name},{comment.userId.lastName} </p>
                   </div>
                   <div className="centertext">
                         <div className="Text" suppressContentEditableWarning={true} type="text" onInput={(e)=>setModify(e.currentTarget.textContent)} contentEditable >{comment.comment}</div>
                     <div> 
                      <button onClick={()=>modifyComment(comment._id)} className="tooltip"><EditIcon/></button>
                      <button onClick={()=>deleteComment(comment._id)} className="tooltip"><DeleteIcon/></button>
                  </div>
              </div>
            </div>
   }
 </>
)
}
