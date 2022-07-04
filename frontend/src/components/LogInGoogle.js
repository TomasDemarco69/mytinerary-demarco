import React,{useEffect} from "react";
import jwt_decode from 'jwt-decode'; 
import userActions from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function LogInGoogle(){
    const dispatch= useDispatch()

    const habdleCallbackResponse=(response)=>{
  
        let userObject = jwt_decode(response.credential)
        console.log(userObject);

        dispatch(userActions.logIn({
                email:userObject.email,
                password: userObject.sub,
                from:'google'
        }))
    }
  
    useEffect(()=>{
        /* global google */
        
        google.accounts.id.initialize({
            client_id:'429167150603-4jq602f13c328ib3pegb1iac7relsejf.apps.googleusercontent.com',
          
            context:'signup',
            callback: habdleCallbackResponse 
        });
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            {theme:'outline', size:'medium', text:'signup_with' ,locale:'en-IN'}
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
    })
    
    return(
        <div id='buttonDiv'></div>
        //<div></div>
    )
}