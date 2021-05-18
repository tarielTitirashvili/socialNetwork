import css from './App.module.css'
import Nav from './components/nav/nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/headerContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className={css.container}>
          <Nav firstFriends={props.store.dialogsPage.dialogFriends} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}
          />
          <Route path="/massage" render={() => <DialogsContainer/>}
          />
          <Route path="/users" render={() => <UsersContainer/>}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
