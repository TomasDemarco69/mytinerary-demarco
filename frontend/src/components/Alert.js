import React from 'react'
import {Snackbar,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'

function Alert(props) {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch({
            type: 'MESSAGE',
            payload:{
                view: false,
                message: '',
                success: false}
        })
    }
    const action = (
        <div style={{
            width: '100%',
            fontWeight: '400'}}>
            {typeof(props.alert.message) === "string" ?
                (<p style={{backgroundColor:'green'}}>{props.alert.message}</p>) :
                <div>{props.alert.message.map((message,index) =><p key={index} style={{backgroundColor:'red'}}>{message.message}</p>)}</div>
            }
        </div>
    )
    return (
        <Snackbar sx={{backgroundColor:'white'}} open={props.alert.view} autoHideDuration={5000} onClose={handleClose} action={action}
            message={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
        } 
        />
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.userReducer.alert
    }
}
export default connect(mapStateToProps, null)(Alert)