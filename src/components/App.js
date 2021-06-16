import { useState } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Messages from './Messages';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const [notification, setNotification] = useState([])  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
