export const getAllUsers = (state) => {
    return state.usersPage.users
}
export const getPageSize = (state) => {
    return state.usersPage.pagesize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCurrentPageIndex = (state) => {
    return state.usersPage.currentPage
}
export const getLoadingStatus = (state) => {
    return state.usersPage.loading
}
export const getDisableFollowing = (state) => {
    return state.usersPage.disableFollowing
}