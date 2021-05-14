import React from 'react'
import css from './users.module.css'
import * as axios from 'axios'
import userMock from '../../images/user-mock.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count=${this.props.pagesize} `)
            .then(response => {this.props.setUsers(response.data.items) 
                this.props.setTotalCount(response.data.totalCount)})
    }
    onPageChanged = (pageNumber) => {
        this.props.callNewPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize} `)
        .then(response => {this.props.setUsers(response.data.items)  
        console.log(response)} )
    }
    render() {
        let numPages = Math.ceil(this.props.totalCount / this.props.pagesize)
        let pages = [];
        for (let i = 1; i <= numPages; i++) {
            pages.push(i);
        }
        return (
            <div className={css.users_container} >
                <div>
                    {pages.map(p =>
                        <span className={this.props.currentPage === p ? css.selected_page : ''} onClick = {(e) => this.onPageChanged(p)  } >
                            { p }
                        </span>)}
                </div>
                <div className={css.title} >
                    users list
            </div>
                {this.props.users.map(user => <div kay={user.id}>
                    <div className={css.user_container} >
                        <div className={css.user_avatar}>
                            <img src={user.photos.small != null ? user.photos.small : userMock} alt="userImage" className={css.avatarImg} />
                            {!user.followed ? <button className={css.show_button} onClick={() => this.props.follow(user.id)} > follow </button> : <button className={css.show_button} onClick={() => this.props.unFollow(user.id)} > unfolow </button>}
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
}

export default Users