import React from 'react'
import css from './users.module.css'
import userMock from '../../../images/user-mock.png'
import {NavLink} from 'react-router-dom'

const User = (props) => {
    
    return (
        <div className={css.users_container} >
            <div kay={props.user.id}>
                <div className={css.user_container} >
                    <div className={css.user_avatar} >
                        <NavLink to = {`/profile/${props.user.id}`} >
                        <img src={props.user.photos.small != null ? props.user.photos.small : userMock} alt="userImage" className={css.avatarImg} />
                        </NavLink>
                        {!props.user.followed ? 
                        <button disabled = {props.disableFollowing.some(id => id === props.user.id)}  className="btn btn-info" 
                            onClick={() => { props.follow(props.user.id) }
                        }> 
                            follow 
                        </button> : 
                        <button disabled = {props.disableFollowing.some(id => id === props.user.id)} className="btn btn-info"
                            onClick={() =>{ props.unFollow(props.user.id) }
                        }>
                             unfolow 
                        </button>}
                    </div>
                    <div>
                        <div className={css.user_text} >
                             full name: {props.user.name}.
                        </div>
                        <div className={css.user_text} >
                             status: {props.user.status}.
                        </div>
                    </div>
                    <div className={css.user_text} >
                    </div>
                </div>
            </div>
         </div>
    )
}

export default User