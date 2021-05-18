const clickedFollow = "clickedFollow"
const clickedUnFollow = "clickedUnFollow"
const needUsersInfo = "needUsersInfo"
const clickedNewPage = "clickedNewPage"
const checkTotalCount = "checkTotalCount"
const load = "load"

let initialState = {
  users: [],
  pagesize: 100,
  totalCount: 0,
  currentPage: 1,
  loading: false,
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
    default: return state
  }
}

export const followAC = (userId) => ({ type: clickedFollow, userId })

export const unFollowAC = (userId) => ({ type: clickedUnFollow, userId })

export const satUsersAC = (user) => ({ type: needUsersInfo, user })

export const changePageAC = (page) => ({ type: clickedNewPage, page })

export const totalCountAC = (totalCount) => ({ type: checkTotalCount, totalCount })

export const loadingAC = (loading) => ({ type: load, loading })

export default usersReducer