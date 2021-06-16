import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import css from './friends.module.css'

const FirstThreeFriends = (props) => {
    if (props.id > 2) {
        return <Fragment></Fragment>
    } else {
        return <div>
            <NavLink to={'/massage/' + props.id}>
                <img className={css.imageSize} src={props.url} alt="url" />
                <div className = {css.friend}>{props.name}</div>
            </NavLink>
        </div>
    }
}

export default FirstThreeFriends