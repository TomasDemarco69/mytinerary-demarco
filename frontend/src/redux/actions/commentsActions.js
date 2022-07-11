import axios from "axios"

const commentsActions={

    addComment:(data)=>{
        const token= localStorage.getItem("token")

        return async(dispatch, getState)=>{
            if(data.comment !== "") {
                const res= await axios.post("http://localhost:4000/api/comment",{data},{
                    headers:{
                        "Authorization":"Bearer "+ token
                    }
                })
                dispatch({
                    type: "MESSAGE",
                    payload:{
                        view:true,
                        message: res.data.message,
                        succes:res.data.succes
                    }
                })
                return res
            } else {
                dispatch({
                    type: "MESSAGE",
                    payload:{
                        view:true,
                        message: "Write a comment before sending"
                    }
                })
            }
        }
    },
    modifyComment: (commentModify)=>{
        const token= localStorage.getItem("token")
        return async (dispatch, getState)=>{
            const res= await axios.put("http://localhost:4000/api/comment", {commentModify},{
                headers:{
                    "Authorization":"Bearer "+ token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload:{
                    view:true,
                    message: res.data.message,
                    succes:res.data.succes
                }
            })
            return res
        }
    },
    deleteComment:(id)=>{
        const token= localStorage.getItem("token")

        return async(dispatch, getState)=>{
            const res= await axios.post(`http://localhost:4000/api/comment/${id}`, {}, {
                headers:{
                    "Authorization":"Bearer "+ token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload:{
                    view:true,
                    message: res.data.message,
                    succes:res.data.succes
                }
            })
        }
    }

}
export default commentsActions
