import css from './App.module.css'
import Nav from './components/nav/nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route , Redirect} from 'react-router-dom'
import HeaderContainer from './components/header/headerContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './redux/reducer/loginReducer';
import Loading from './components/Loading/Loading';
import { compose } from 'redux';
import { initialized } from './redux/reducer/appReducer';

//react Lazy
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
          <Route path="/profile/:userId?" render={() => 
            <React.Suspense fallback={<div><Loading /></div>}> 
              <ProfileContainer />
            </React.Suspense>
          }
          />
          <Route path="/massage" render={() => <DialogsContainer/>}
          />
          <Route path="/users" render={() => 
            <React.Suspense fallback={<div><Loading /></div>}> 
              <UsersContainer/>
            </React.Suspense>
          }
          />
          <Route path="/login" render={() => <LoginContainer/>} />
          <Route exact path="/" render={() => <Redirect  to = '/profile' />}/>
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