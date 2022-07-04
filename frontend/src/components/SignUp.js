import React from 'react';
import '../styles/index.css';
import { Link as LinkRouter } from 'react-router-dom';
//import {useDispatch, useSelector} from 'react-redux';
import userActions from '../redux/actions/userActions';
import { connect } from 'react-redux';
import SignUpGoogle from './SignUpGoogle';
import logo from '../images/logo.png';
import { useState } from 'react';



function SignUp(props){
  const roles= ["Select rol", "user"]
  
  const countrys= ["unselected","Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Uruguay","Peru","Paraguay","Venezuela"]
  const[selectCountry, setSelectCountry]= useState("unselected")

  function selected(event){
    console.log(event.target.value)
    setSelectCountry(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault() 
    const userData ={
      name:event.target[0].value,
      lastName:event.target[1].value,
      email:event.target[2].value,
      password:event.target[3].value,
      imageUser:event.target[4].value,
      role:event.target[5].value,
      from:'signUp',
      country:selectCountry
    }
    event.target.reset()
    console.log(event);
    props.signUp(userData)
    console.log(userData);
  }

  return (
    <>
      <div className='signup-ctn'>
         <img src={logo} style={{height:'50px', width:'50px'}} alt="logo"/>
         <h1 style={{fontWeight:'900', color:'black'}}>Sign up</h1>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <p>Do you already have an account?</p>
           <LinkRouter to="/logIn"><span>Log In</span></LinkRouter>
         </div>
         <div>
           <select className='input-form' style={{cursor:'pointer'}} name='country' onChange={selected}>
                   {countrys.map((country,index)=>
                      <option style={{cursor:'pointer'}} key={index}>{country}</option>
                    )}
          </select>
        </div>
        {selectCountry !== "unselected" ?
          <>
        <SignUpGoogle country={selectCountry}/>
      <form className='form-signup' onSubmit={handleSubmit}>
        <input className='input-form'  name='name' type="text" placeholder='Name' />
        <input className='input-form'  name='lastName' type="text"  placeholder='LastName'/>
      
        <input className='input-form'  name='email' type="email"  placeholder='Email'/>
        
        <input className='input-form'  name='password' type="text"  placeholder='Password'/>
        <input className='input-form'  name='imageUser' type="text"  placeholder='Profile Pic (url)'/>
        <select className='input-form' style={{cursor:'pointer'}} name='country'>
                  {roles.map((rol,index)=>
                      <option key={index}>{rol}</option>
                    )}
        </select>
        <button className='form-env boton-footer' type="submit" value="submit">Create Account</button>
        <div style={{marginTop:'1rem'}}>
        </div>
      </form>
        </>   
        :
        <h1>selecciona para continuar</h1>
        }
      
    </div>

    </>
  

  );
}

const mapDispatchToProps= {
  signUp: userActions.signUp
}
export default connect(null, mapDispatchToProps)(SignUp);