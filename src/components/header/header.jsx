import React from 'react'
import css from './header.module.css'
import SingIn from './SingIn/SingIn'

const Header = (props) =>{
    return(
        <header className = {css.main__header}>
            <img className = {css.image} src='https://api.freelogodesign.org/assets/thumb/logo/3343895_400.png' alt='logo'/>
            <SingIn 
                logIn = { props.login } 
                isAuthorized = { props.isAuthorized } 
                imageUrl = { props.imageUrl }
                logoutCaller = { props.logoutCaller } 
            />
        </header>
    )
}

export default Header