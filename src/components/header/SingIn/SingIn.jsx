import React from 'react'
import css from './SingIn.module.css'
import loginImg from '../../../images/login.png'
import {NavLink} from 'react-router-dom'

const LogIn = () =>{
    return(               
        <div>
            <NavLink to ='login' >
                <div className = {css.login_container}>
                    <img className = {css.image} src={loginImg} alt="login" />
                </div>
                <div className = {css.login}>
                    lo-gin
                </div>
            </NavLink>
        </div>
    )
}

export default LogIn