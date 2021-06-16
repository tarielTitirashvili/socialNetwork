import { createStore, combineReducers , applyMiddleware, compose} from "redux"
import addMassageReducer from "./reducer/addMassageReducer"
import loginReducer from "./reducer/loginReducer"
import profileReducer from "./reducer/profileReducer"
import usersReducer from "./reducer/usersReducer"
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducer/appReducer'

let reducers = combineReducers(
    {
        dialogsPage: addMassageReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        login: loginReducer,
        app: appReducer,
        form: formReducer,
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)))
// let store = createStore(reducers, applyMiddleware(thunk))
export default store