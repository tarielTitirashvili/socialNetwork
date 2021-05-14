import { connect } from 'react-redux'
import { followAC, unFollowAC, satUsersAC, changePageAC, totalCountAC } from '../../redux/reducer/usersReducer'
import Users from './UsersClass'

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = dispatch =>{
    return{
        follow(userId) { dispatch(followAC(userId)) },
        unFollow(userId) { dispatch(unFollowAC(userId)) },
        setUsers(user) { dispatch(satUsersAC(user)) },
        callNewPage: (page) => { dispatch(changePageAC(page)) },
        setTotalCount(totalCount) { dispatch(totalCountAC(totalCount)) },
    }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer