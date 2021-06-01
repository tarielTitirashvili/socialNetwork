import { loginRequest } from "./loginReducer"

const initializationStatus = 'initializationStatus'

let initialState = {
  initializationStatus: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case initializationStatus:
      return{
        ...state,
        initializationStatus: true
      }
    default: return state
  }
}

export const initialized = () =>({ type: initializationStatus })

export const initializeApp = () =>{
  return (dispatch)=>{
    let promise = [dispatch(loginRequest)]
    Promise.all([promise]).then(()=>{
      dispatch(initialized())
    })
  }
}

export default appReducer