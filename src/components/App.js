import { useState, useEffect } from 'react';
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
  const [notifications, setNotifications] = useState([])

  const addRandom = (title, date, image) => {
    const newNotification = {
      id: Date.now(),
      title: title,
      date: date,
      image: image
    }
    setNotifications(notifications => [...notifications, newNotification])
  }

  const deleteNotification = (id) => {
    const newArray = notifications.filter(notifications => {
      return notifications.id !== id
    })
    setNotifications(newArray)
  }

  useEffect(() => {
    const localNotifications = localStorage.getItem('localNotifications')

    localNotifications && setNotifications(JSON.parse(localNotifications))
  }, [])

  useEffect(() => {
    localStorage.setItem('localNotifications', JSON.stringify(notifications))
  })

  return (
    <div>
      <NavBar 
        notifications={notifications}  
        deleteNotification={deleteNotification} />
      <Switch>
        <Route exact path="/">
          <Home addRandom={addRandom}/>
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
