import React from 'react';
import '../styles/index.css';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import LogInGoogle from './LogInGoogle';
import logo from '../images/logo.png'

function LogIn(props){

    const handleSubmit= async (event)=>{
        event.preventDefault()
        const logInUser= {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "signUp"
        }
        console.log(event)
        props.logIn(logInUser)
        console.log(logInUser);
    }
    
    return(
        <div className='signup-ctn'>
            <form className='form-signup' onSubmit={handleSubmit}>
                <img src={logo} alt="logo" style={{height:'50px', width:'50px'}} />
                <h1 style={{fontWeight:'900', color:'black', marginBottom:'10px'}}>Sign in MyTinerary now</h1>
                <input className='input-form'  name='email' type="email"  placeholder='Email'/>
                <input className='input-form'  name='password' type="password"  placeholder='Password'/>
                <button className='form-env' type="submit" value="submit">LOG IN</button>
                <div style={{marginTop:'1rem'}}>
                    <LogInGoogle/>
                </div>
                <p style={{ color:'black', fontSize:"1.3rem"}}>Do not you have an account yet?</p>
                <LinkRouter to="/signUp">
                    <span style={{fontSize:"1.2rem"}}>create one now!</span>
                </LinkRouter>
            </form>
        </div>
    )

}
const mapDispatchToProps= {
    logIn: userActions.logIn
  }
export default connect(null, mapDispatchToProps)(LogIn)