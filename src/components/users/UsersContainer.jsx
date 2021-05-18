import React from "react"
import { connect } from "react-redux"
import { followAC,unFollowAC,satUsersAC,changePageAC,totalCountAC,loadingAC } from "../../redux/reducer/usersReducer"
import Users from "./Users/Users"
import * as axios from "axios"
import Loading from "../Loading/Loading"

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.loadingImgCaller( !this.props.loading )
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count=${this.props.pagesize} `)
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.loadingImgCaller( !this.props.loading )
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.callNewPage(pageNumber)
    this.props.loadingImgCaller( !this.props.loading )
    axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize} `
      )
      .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.loadingImgCaller( !this.props.loading )
        })
  }
  render() {
    return (
    <div>
           { this.props.loading ? <Loading /> : null }
        <Users
          pagesize={this.props.pagesize}
          totalCount={this.props.totalCount}
          users={this.props.users}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          setTotalCount={this.props.setTotalCount}
          onPageChanged={this.onPageChanged}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pagesize: state.usersPage.pagesize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    loading: state.usersPage.loading,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(followAC(userId))
    },
    unFollow(userId) {
      dispatch(unFollowAC(userId))
    },
    setUsers(user) {
      dispatch(satUsersAC(user))
    },
    callNewPage (page)  {
      dispatch(changePageAC(page))
    },
    setTotalCount(totalCount) {
      dispatch(totalCountAC(totalCount))
    },
    loadingImgCaller:(loading) =>{
      dispatch(loadingAC(loading))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer
