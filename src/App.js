import css from './App.module.css'
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/users/UsersContainer'

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={css.container}>
          <Nav firstFriends={props.store.dialogsPage.dialogFriends} />
          <Route path="/profile" render={() => <Profile/>}
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
