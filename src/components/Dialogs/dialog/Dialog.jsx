import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={`${css.friend} + '' + ${css.active}`}>
            <NavLink to={'/massage/' + props.id} className = {css.name} >
                <img src={props.pictureUrl} alt="avatar img" className = {css.image} /> 
                {props.name}  
            </NavLink>
        </div>
    )
}

export default Dialog