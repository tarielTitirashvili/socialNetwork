import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import css from './friends.module.css'

const FirstThreeFriends = (props) => {
    if (props.kay > 2) {
        return <Fragment></Fragment>
    } else {
        return <div className={css.imageConteiner}>
            <NavLink to={'/massage/' + props.kay}>
                <img className={css.imageSize} src={props.url} alt="url" />
                <div className = {css.friend}>{props.name}</div>
            </NavLink>
        </div>
    }
}

export default FirstThreeFriends