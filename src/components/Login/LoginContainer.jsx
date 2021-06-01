import React from 'react'
import { connect } from 'react-redux'
import { checkLoginData, logoutCaller } from '../../redux/reducer/loginReducer'
import Login from './login'

class LoginContainer extends React.Component{
    render(){
    return <Login
        email = { this.props.email }
        checkLoginData = { this.props.checkLoginData }
        logout = { this.props.logout }  
        isAuthorized = { this.props.isAuthorized }
        />
    }
}


let mapStateToProps = (state) => {
    return{
        email: state.login.email,
        isAuthorized: state.login.isAuthorized
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        checkLoginData: (email, password, rememberMe)=>{
            dispatch(checkLoginData(email, password, rememberMe))
        },
        logout: ()=>{dispatch(logoutCaller())} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)