import {React} from "react";
import "./styles/index.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Index from "./paginas/Index"
import Cities from "./paginas/Cities"
import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import CitiesDetails from "./components/CitiesDetails";
import ScrollToTop from "react-scroll-to-top";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import  Alert  from '../src/components/Alert';
import { connect } from 'react-redux';
import {useEffect} from "react";
import userActions from "./redux/actions/userActions";
import swal from 'sweetalert2';
window.Swal = swal;



function App(props) {

  //  const user = useSelector(store => store.userReducer.user)
  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      const token=localStorage.getItem('token')
      props.verifyToken(token)
 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="app">
     <ResponsiveAppBar/>
     <Alert/>
     <Routes>
       <Route path = "/index" element = {<Index/>} />
       <Route path = "/Home" element = {<Index/>} />
       <Route path = "/" element = {<Index/>} />
       <Route path = "/cities" element = {<Cities/>}/>
       <Route path = "/*" element = {<Index/>}/>
       <Route path = "/city/:id" element = {<CitiesDetails/>}/>
       {!props.user && <Route path='/signUp' element={<SignUp/>}/>}
       {!props.user &&<Route path='/logIn' element={<LogIn/>}/>}
     </Routes>
     <ScrollToTop smooth />
    <Footer/>
    </div>
  );
}
const mapDispatchToProps ={
  verifyToken: userActions.verifyToken,
}
const mapStateToProps=(state)=>{
  return {
      user:state.userReducer.user
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(App);

