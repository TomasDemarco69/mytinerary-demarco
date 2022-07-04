import React,{useEffect} from "react";
import jwt_decode from 'jwt-decode'; 
import userActions from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function SignUpGoogle(){
    const dispatch= useDispatch(); 
    //const ref= useRef(null)

    const handleCallbackResponse=(response)=>{
       
        let userObject = jwt_decode(response.credential)
        console.log(userObject);

        dispatch(userActions.signUp({
                name: userObject.given_name,
                lastName: userObject.family_name,
                email:userObject.email,
                password: userObject.sub,
                imageUser: userObject.picture,
                country:'argentina',
                role: 'user',
                from:'google'
        }))
    }

    useEffect(()=>{
        /* global google */
        
            google.accounts.id.initialize({
                client_id:'791890057786-fa7vtpmsul6kpbs33vedmvpi008rpo28.apps.googleusercontent.com',
                callback: handleCallbackResponse, 
                context:"signup"
            });
        
       
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            //ref.buttonDiv,
            {theme:'outline', size:'medium', text:'signup_with' ,locale:'en-IN'}
        )
        //google.accounts.id.prompt();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    )
    
    return(
        <div id='buttonDiv'></div>
     
    )
}