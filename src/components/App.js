import { useState } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import './App.css';

const App = () => {
  const [notification, setNotification] = useState([])  

  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
    </Switch>
  );
}

export default App;
