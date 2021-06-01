import { followAPI, unfollowAPI ,getUsers } from "../../Api/Api"
const clickedFollow = "clickedFollow"
const clickedUnFollow = "clickedUnFollow"
const needUsersInfo = "needUsersInfo"
const clickedNewPage = "clickedNewPage"
const checkTotalCount = "checkTotalCount"
const load = "load"
const followingIsClicked = "followingIsClicked"

let initialState = {
  users: [],
  pagesize: 50,
  totalCount: 0,
  currentPage: 1,
  loading: false,
  disableFollowing: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case clickedFollow:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            user.followed = true
            return user
          } return user
        }),
      }
    case clickedUnFollow:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            user.followed = false
            return user
          } return user
        })
      }
    case needUsersInfo:
      return {
        ...state,
        users: [...action.user]
      }
    case clickedNewPage:
      return {
        ...state,
        currentPage: action.page,
      }
    case checkTotalCount:
      return {
        ...state,
        totalCount: action.totalCount,
      }
      case load:
      return {
        ...state,
        loading: action.loading,
      }
      case followingIsClicked:
        return{
          ...state,
          disableFollowing: action.followingClicked ? [...state.disableFollowing, action.id] : [...state.disableFollowing.filter(id => id !== action.id)]
        }
    default: return state
  }
}

export const followAC = (userId) => ({ type: clickedFollow, userId })

export const unFollowAC = (userId) => ({ type: clickedUnFollow, userId })

export const satUsersAC = (user) => ({ type: needUsersInfo, user })

export const changePageAC = (page) => ({ type: clickedNewPage, page })

export const totalCountAC = (totalCount) => ({ type: checkTotalCount, totalCount })

export const loadingAC = (loading) => ({ type: load, loading })

export const followingClickedAC = (followingClicked, id) =>({ type: followingIsClicked, followingClicked, id })


export const getUsersThunkAC = (currentPage, pagesize) => {
  return (dispatch) =>{
    dispatch(loadingAC( true ))

    getUsers(currentPage, pagesize).then((data) => {
      dispatch(satUsersAC(data.items))
      dispatch(totalCountAC(data.totalCount))
      dispatch(loadingAC( false ))
    })
  }
}
export const unFollow = (id) => {
  return (dispatch) =>{
    dispatch(followingClickedAC(true, id))
    unfollowAPI(id)
    .then((response) =>{
        if(response.data.resultCode === 0){
            dispatch(unFollowAC(id))
        }
        dispatch(followingClickedAC(false,id))
    })
  }
}
export const follow = (id) => {
  return (dispatch) =>{
    dispatch(followingClickedAC(true, id))
    followAPI(id)
    .then((response) =>{
        if(response.data.resultCode === 0){
          dispatch(followAC(id))
        }
        dispatch(followingClickedAC(false, id))
    })
  }
}
export default usersReducer
