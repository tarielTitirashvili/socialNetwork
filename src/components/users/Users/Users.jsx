import React from 'react'
import css from './users.module.css'
import User from './User'
import Paginator from './Pagination/Pagination'

const Users = (props) => {
    return (
        <div className={css.users_container} >
            <Paginator
                totalCount = {props.totalCount}
                pagesize = {props.pagesize}
                currentPage = {props.currentPage}
                onPageChanged = {props.onPageChanged}
             />
            <div className={css.title} >
                users list
            </div>
            {props.users.map((user) => 
                <User 
                    key = {user.id}
                    user = {user} 
                    disableFollowing = {props.disableFollowing} 
                    follow = {props.follow}  
                    unFollow = {props.unFollow} 
                />     
            )}
            <button className="btn btn-info" >show more</button>
         </div>
    )
}

export default Users