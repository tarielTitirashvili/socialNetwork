import { createStore, combineReducers } from "redux"
import addMassageReducer from "./reducer/addMassageReducer"
import addPostsReducer from "./reducer/addPostsReducer"
import usersReducer from "./reducer/usersReducer"

let reducers = combineReducers(
    {
        dialogsPage: addMassageReducer,
        profilePage: addPostsReducer,
        usersPage: usersReducer,
    }
)

let store = createStore(reducers)

export default store