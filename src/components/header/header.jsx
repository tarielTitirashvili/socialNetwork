import React from 'react'
import css from './header.module.css'

const Header = () =>{
    return(
        <header className = {css.main__header}>
            <img className = {css.image} src='https://api.freelogodesign.org/assets/thumb/logo/3343895_400.png' alt='logo'/>
        </header>
    )
}

export default Header