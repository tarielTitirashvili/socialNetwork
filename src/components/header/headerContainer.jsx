import React from "react"
import { Fragment } from "react"
import Header from './header'
import { loginRequest, logoutCaller, setUserLoginDataAC, userImageUrlAc } from '../../redux/reducer/loginReducer'
import { connect } from "react-redux"

export class HeaderContainer extends React.Component {
  
  render() {
    return (
        <Fragment>
            <Header
            login = {this.props.login}
            isAuthorized = {this.props.isAuthorized}
            logoutCaller = {this.props.logoutCaller}
            />
        </Fragment>
    )
  }
}

let mapStateToProps =(state)=> {
  return{
  login: state.login.login,
  isAuthorized: state.login.isAuthorized,
  imageUrl: state.login.imageUrl
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    setUserLoginData:(id, email, login) => {dispatch(setUserLoginDataAC(id, email, login))},
    userImageUrl: (url) =>{dispatch(userImageUrlAc(url))},
    loginRequest() {dispatch(loginRequest())},
    logoutCaller() {dispatch(logoutCaller())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer)