import { useState, useEffect } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import faker from 'faker'
import Home from './Home';
import Messages from './Messages';
import NavBar from './NavBar';
import './App.css';
import email from '../../src/email.logo.png'

const App = () => {
  const [notifications, setNotifications] = useState([])

  const addRandom = (title, date, image) => {
    const newNotification = {
      id: Date.now(),
      title: faker.company.companyName(),
      date: new Date(faker.date.past()).toLocaleString("en-US"),
      image: `${faker.image.animals()}?random=${Date.now()}`
    }
    setNotifications(notifications => [...notifications, newNotification])
  }

  const addEmail = () => {
    const newNotification = {
      id: Date.now(),
      title: `New email from ${faker.company.companyName()}`,
      date: new Date(faker.date.past()).toLocaleString("en-US"),
      image: email
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
    <div className="App">
      <NavBar 
        notifications={notifications}  
        deleteNotification={deleteNotification} />
      <Switch>
        <Route exact path="/">
          <Home 
            addRandom={addRandom}
            addEmail={addEmail}
            />
        </Route>
        <Route path="/messages">
          <Messages 
            notifications={notifications}
            deleteNotification={deleteNotification}  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
