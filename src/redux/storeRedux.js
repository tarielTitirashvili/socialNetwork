import { createStore, combineReducers } from "redux"
import addMassageReducer from "./reducer/addMassageReducer"
import loginReducer from "./reducer/loginReducer"
import profileReducer from "./reducer/profileReducer"
import usersReducer from "./reducer/usersReducer"

let reducers = combineReducers(
    {
        dialogsPage: addMassageReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        login: loginReducer,
    }
)

let store = createStore(reducers)

export default store