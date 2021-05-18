import React from 'react'
import css from './users.module.css'
import userMock from '../../../images/user-mock.png'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
    
        let numPages = Math.ceil(props.totalCount / props.pagesize)
        let pages = [];
        for (let i = 1; i <= numPages; i++) {
            pages.push(i);
        }
        return (
            <div className={css.users_container} >
                <div>
                    {pages.map( p =>
                        <span className={props.currentPage === p ? css.selected_page : ''} onClick = {(e) => props.onPageChanged(p) } >
                            { p }
                        </span>)}
                </div>
                <div className={css.title} >
                    users list
            </div>
                {props.users.map(user => <div kay={user.id}>
                    <div className={css.user_container} >
                        <div className={css.user_avatar} >
                            <NavLink to = {`/profile/${user.id}`} >
                            <img src={user.photos.small != null ? user.photos.small : userMock} alt="userImage" className={css.avatarImg} />
                            </NavLink>
                            {!user.followed ? <button className={css.show_button} onClick={() => props.follow(user.id)} > follow </button> : <button className={css.show_button} onClick={() => props.unFollow(user.id)} > unfolow </button>}
                        </div>
                        <div>
                            <div className={css.user_text} > full name: {user.name}.</div>
                            <div className={css.user_text} > status: {user.status}.</div>
                        </div>
                        <div className={css.user_text} >
                        </div>
                    </div>
                </div>
                )}
                <button className={css.show_button} >show more</button>
            </div>
        )
}

export default Users