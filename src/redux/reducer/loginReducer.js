import {loginAPI, loginAuthMeAPI, logOutAPI, setProfileAPI} from '../../Api/Api'
import {stopSubmit} from 'redux-form'

const setUserLoginData = 'setUserLoginData'
const userImageUrl = 'userImageUrl'
const getEmailPassword = 'getEmailPassword'

let initialState = {
  id: null,
  email: null,
  password: null,
  login: null,
  isAuthorized: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserLoginData:
      return{
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuthorized: action.authStatus,
        imageUrl: null,
      }
    case userImageUrl:
      return{
        ...state,
        url: action.url
      }
    case getEmailPassword:{
      return{
        ...state,
        email: action.email,
        password: action.password
      }
    }
    default: return state
  }

}

export const setUserLoginDataAC = (id, email, login,authStatus) => ({ type: setUserLoginData, id, email, login,authStatus })

export const userImageUrlAc = (url) => ({ type: userImageUrl, url })

export const getUserLoginData = (email) =>({ type: getEmailPassword, email })

export const loginRequest =()=>{
    return (dispatch) => {
    loginAPI().then((response) => {
      if(response.data.resultCode===0){
      dispatch(setUserLoginDataAC(response.data.data.id, response.data.data.email, response.data.data.login, true))
      setProfileAPI(response.data.data.id)
      .then((response)=>{
      dispatch(userImageUrlAc(response.data.photos.large))
      })}
    })
  }
}

export const checkLoginData = (email, password, rememberMe) =>{
  return (dispatch)=>{
    dispatch(getUserLoginData(email))
    loginAuthMeAPI(email, password, rememberMe)
    .then(response=>{
      if(response.data.resultCode === 0){
        dispatch(loginRequest())
      }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0]: 'some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
  }
}

export const logoutCaller = () =>{
  return (dispatch)=>{
    dispatch(getUserLoginData())
    logOutAPI()
    .then(response=>{
      if(response.data.resultCode === 0){
        dispatch(setUserLoginDataAC(null, null, null, false))
      }
    })
  }
}

export default loginReducer