import React from 'react'
import css from './SingIn.module.css'
import loginImg from '../../../images/login.png'
import {NavLink} from 'react-router-dom'
import authorizedNoImage from '../../../images/user-mock.png'

const SingIn = (props) =>{
    let onClick=()=>{
        props.logoutCaller()
    }
    return(               
        <div>
            <NavLink to ='login' >
                <div className = {css.login_container}>
                    <img className = {css.image} src = {props.isAuthorized ? ( props.imageUrl ? props.imageUrl :authorizedNoImage): loginImg} alt="login" />
                </div>
                <div className = {css.login}>
                    { props.isAuthorized
                     ? <div> {props.logIn} <button className = "btn btn-outline-danger  my-2 my-sm-0" onClick = {onClick}>Logout</button> </div>
                     : <button className = "btn btn-outline-danger  my-2 my-sm-0">login</button> }
                </div>
            </NavLink>
        </div>
    )
}
export default SingIn