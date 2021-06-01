import React from "react"
import { connect } from "react-redux"
import { follow, unFollow, changePageAC, getUsersThunkAC } from "../../redux/reducer/usersReducer"
import Users from "./Users/Users"
import Loading from "../Loading/Loading"
import { compose } from "redux"
import { getAllUsers, getPageSize,getTotalCount,getCurrentPageIndex,getLoadingStatus,getDisableFollowing } from "../../redux/selectors/usersSelector"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pagesize)
  }
  onPageChanged = (pageNumber) => {
    this.props.callNewPage(pageNumber)
    this.props.getUsersThunk(this.props.currentPage, this.props.pagesize)
  }
  render() {
    return (
    <div>
           { this.props.loading ? <Loading /> : null }
        <Users
          follow = {this.props.follow}
          unFollow = {this.props.unFollow}
          pagesize={this.props.pagesize}
          totalCount={this.props.totalCount}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          disableFollowing = {this.props.disable}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pagesize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPageIndex(state),
    loading: getLoadingStatus(state),
    disable: getDisableFollowing(state),
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(follow(userId))
    },
    unFollow(userId) {
      dispatch(unFollow(userId))
    },
    callNewPage (page)  {
      dispatch(changePageAC(page))
    },
    getUsersThunk(currentPage, pagesize){
      dispatch(getUsersThunkAC(currentPage, pagesize))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)
