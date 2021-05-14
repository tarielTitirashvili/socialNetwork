const clickedFollow = "clickedFollow"
const clickedUnFollow = "clickedUnFollow"
const needUsersInfo = "needUsersInfo"
const clickedNewPage = "clickedNewPage"
const checkTotalCount = "checkTotalCount"

let initialState = {
  users: [],
  pagesize: 100,
  totalCount: 0,
  currentPage: 1,
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
    default: return state
  }
}

export const followAC = (userId) => ({ type: clickedFollow, userId })

export const unFollowAC = (userId) => ({ type: clickedUnFollow, userId })

export const satUsersAC = (user) => ({ type: needUsersInfo, user })

export const changePageAC = (page) => ({ type: clickedNewPage, page })

export const totalCountAC = (totalCount) => ({ type: checkTotalCount, totalCount })

export default usersReducer