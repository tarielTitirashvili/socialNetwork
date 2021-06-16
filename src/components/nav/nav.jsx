import React from 'react'
import { NavLink } from 'react-router-dom'
import FirstThreeFriends from './FirstThreeFriends/FirstThreeFriends'
import css from './nav.module.css'

const Nav = (props) => {
    let friends = props.firstFriends
    let friendsRender = friends.map((F) =><FirstThreeFriends  key = {F.id} id = {F.id} friendName = {F.firstFriends} url = {F.url} name = {F.name} /> )
    return (
        <nav className={css.nav}>
            <ul className = { css.navList } > 
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/profile">profile</NavLink>
                </li>
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/massage">massage</NavLink>
                </li>
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/news">news</NavLink>
                </li>
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/music">music</NavLink>
                </li>
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/parameters">parameters</NavLink>
                </li>
                <li className={css.items}>
                    <NavLink activeClassName={css.active} to="/users">find users</NavLink>
                </li>
                <div>
                   {friendsRender}
                </div>
            </ul>
        </nav>
    )
}

export default Nav