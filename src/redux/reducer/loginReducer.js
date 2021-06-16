import {loginAPI, loginAuthMeAPI, logOutAPI, securityAPI, setProfileAPI} from '../../Api/Api'
import {stopSubmit} from 'redux-form'

const setUserLoginData = 'setUserLoginData'
const userImageUrl = 'userImageUrl'
const setEmailPassword = 'getEmailPassword'
const setCaptchaURL = 'setCaptchaURL'

let initialState = {
  id: null,
  email: null,
  password: null,
  login: null,
  isAuthorized: false,
  captchaURL:null,
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
    case setEmailPassword:{
      return{
        ...state,
        email: action.email,
        password: action.password
      }
    }
    case setCaptchaURL:{
      return{
        ...state,
        captchaURL: action.url
      }
    }
    default: return state
  }

}

export const setUserLoginDataAC = (id, email, login ,authStatus) => ({ type: setUserLoginData, id, email, login,authStatus })

export const userImageUrlAc = (url) => ({ type: userImageUrl, url })

export const getUserLoginData = (email) =>({ type: setEmailPassword, email })

export const captchaUrlAC = (url) =>({ type: setCaptchaURL, url })



export const loginRequest =()=>{
    return async (dispatch) => {
    let response = await loginAPI()
      if(response.data.resultCode===0){
      dispatch(setUserLoginDataAC(response.data.data.id, response.data.data.email, response.data.data.login, true))
      let otherResponse = await setProfileAPI(response.data.data.id)
      
      dispatch(userImageUrlAc(otherResponse.data.photos.large))
     }
  }
}

export const checkLoginData = (email, password, rememberMe, captcha ) =>{
  return async (dispatch)=>{
    dispatch(getUserLoginData(email))
    let response = await loginAuthMeAPI(email, password, rememberMe, captcha)
    if(response.data.resultCode === 0){
      dispatch(loginRequest())
    }else{
      if(response.data.resultCode===10) dispatch(getCaptchaURL())
      let message = response.data.messages.length > 0 ? response.data.messages[0]: 'some error'
      dispatch(stopSubmit('login', {_error: message}))
    }
  }
}

export const logoutCaller = () =>{
  return async (dispatch)=>{
    dispatch(getUserLoginData())
    let response = await logOutAPI()
    if(response.data.resultCode === 0){
      dispatch(setUserLoginDataAC(null, null, null, false))
    }
  }
}

export const getCaptchaURL = () =>async (dispatch)=>{
  let response = await securityAPI()
  const captchaUrl = response.data.url
  dispatch(captchaUrlAC(captchaUrl))
}

export default loginReducer