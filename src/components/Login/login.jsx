import React from 'react'
import LoginForm from './form/LoginForm'
import css from './login.module.css'
import {reduxForm} from 'redux-form'
import { Redirect } from 'react-router'

 const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)

const Login = (props) =>{
    let onSubmit = (data)=>{
        props.checkLoginData( data.email, data.password, data.rememberMe )
    }
    if(props.isAuthorized === true)return <Redirect to = '/profile' />
    return(
        <div className = {css.wrapper}>
            <h2>login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login