const setUserLoginData = "setUserLoginData"

let initialState = {
  id: null,
  email: null,
  login: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserLoginData:
      return{
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
      }
    default: return state
  }

}

export const addNewMassageAction = (id, email, login) => ({ type: setUserLoginData, id, email, login })

export default loginReducer