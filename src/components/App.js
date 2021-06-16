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

const App = () => {
  const [notifications, setNotifications] = useState([])

  const addRandom = (title, date, image) => {
    const newNotification = {
      id: Date.now(),
      title: faker.fake("{{company.companyName}}"),
      date: faker.fake("{{date.past}}"),
      image: faker.fake("{{image.animals}}")
    }
    setNotifications(notifications => [...notifications, newNotification])
    console.log(notifications)
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
          <Messages 
            notifications={notifications}
            deleteNotification={deleteNotification}  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
