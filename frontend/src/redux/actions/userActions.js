import axios from 'axios';
const url="http://localhost:4000"

const userActions={
    signUp:(userData)=>{
        return async(dispatch, getState)=>{
     
            const user= await axios.post(`${url}/api/signUp` , {userData})
    
            dispatch({
                type:"MESSAGE" ,
                payload: {
                    view:true, 
                    message:user.data.message, 
                    success:user.data.success 
            }
        })
        console.log(user.data.message);
        }
    },
    logIn:(logInUser)=>{
        return async (dispatch, getState)=>{
            const user= await axios.post(`${url}/api/logIn`,{logInUser})
            console.log(user);


            if(user.data.success) {
       
                localStorage.setItem('token', user.data.response.token)
                dispatch({type:'USER', payload: user.data.response.userData})
                //dispatch({type:'USERLIST'})
            } else{
                dispatch({
                    type:"MESSAGE" ,
                    payload: {
                        view:true, 
                        message:user.data.message, 
                        success:user.data.success 
                }
                
            })
        }
        console.log(user.data.message);
        }
    },
    logOut:()=>{
        return async(dispatch, getState)=>{
            localStorage.removeItem('token')
            dispatch({type:'USER', payload:null})

        }
    },

    verifyToken:(token)=>{
        return async (dispatch, getState) =>{

            await axios.get(`${url}/api/logInToken`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(user=>{
                    if(user.data.success) {
    
                        dispatch({type:'USER', payload:user.data.response})
                        dispatch({
                            type:'MESSAGE',
                            payload:{
                                view:true,
                                message:user.data.message,
                                success:user.data.success
                            }
                        })
                    } 
                        else{
                            localStorage.removeItem('token')
                        }
                }).catch(error=>{
                    console.log(error);
              
                    if(error.status === 401){
                        dispatch({
                            type:'MESSAGE',
                            payload:{
                                view:true,
                                message:"Please, do your login again" ,
                                success:false
                            }
                        })
                        localStorage.removeItem('token')
                    }
                    
                })
        }
    }
}
export default userActions