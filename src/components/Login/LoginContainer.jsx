import React from 'react'
import { connect } from 'react-redux'
import { checkLoginData, logoutCaller } from '../../redux/reducer/loginReducer'
import Login from './login'

class LoginContainer extends React.Component{
    render(){
    return <Login
        email = { this.props.email }
        checkLoginData = { this.props.checkLoginData }
        isAuthorized = { this.props.isAuthorized }
        captchaURL = { this.props.captchaURL }
        />
    }
}


let mapStateToProps = (state) => {
    return{
        email: state.login.email,
        isAuthorized: state.login.isAuthorized,
        captchaURL: state.login.captchaURL
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        checkLoginData: (email, password, rememberMe, captcha)=>{
            dispatch(checkLoginData(email, password, rememberMe, captcha))
        },
        logout: ()=>{dispatch(logoutCaller())} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)