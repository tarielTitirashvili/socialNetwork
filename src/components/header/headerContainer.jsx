import React from "react"
import { Fragment } from "react"
import Header from './header'
import { logoutCaller, userImageUrlAc } from '../../redux/reducer/loginReducer'
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
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    userImageUrl: (url) =>{dispatch(userImageUrlAc(url))},
    logoutCaller() {dispatch(logoutCaller())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer)