// import { useReducer } from "react";
// import { connect } from "react-redux";
// import userActions from "../redux/actions/userActions";
// import {link as LinkRouter} from "react-router-dom";

// function LogOut (props){
//     const logOut=()=>{
//         props.logOut(props.user.email)
//     }
//     return(
//         <div>
//             <LinkRouter to="/home">
//                 <h3>LogOut</h3>
//             </LinkRouter>
//         </div>
//     )
// }
// const mapDispatchProps={
//     logOut:userActions.logOut
// }
// const mapStateToProps=(state)=>{
//     return(
//         user:useReducer.user
//     )
// }

// export default connect(mapStateToProps, mapDispatchProps),(LogOut)