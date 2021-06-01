import css from './App.module.css'
import Nav from './components/nav/nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './redux/reducer/loginReducer';
import Loading from './components/Loading/Loading';
import { compose } from 'redux';
import { initialized } from './redux/reducer/appReducer';

class App extends React.Component{
  componentDidMount = () => {
    this.props.loginRequest()
    this.props.initialized()
  }
  render(){
    if(!this.props.initializeApp){
    return <Loading/>
    }
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className={css.container}>
          <Nav firstFriends={this.props.store.dialogsPage.dialogFriends} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}
          />
          <Route path="/massage" render={() => <DialogsContainer/>}
          />
          <Route path="/users" render={() => <UsersContainer/>}
          />
          <Route path="/login" render={() => <LoginContainer/>}
          />
        </div>
      </div>
    </BrowserRouter>
  )
  }
}

let mapStateToProps = (state) =>{
  return{
    initializeApp: state.app.initializationStatus
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    loginRequest() {dispatch(loginRequest())},
    initialized() {dispatch(initialized())}
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps) 
  (App)
)