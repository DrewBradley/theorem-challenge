import React from 'react';

const Messages = ({notifications, deleteNotification}) => {
  const messagelist = notifications.map(note => {
    return <li className="dropdown-item">
          <img src={`${note.image}`}/> 
          <p>{note.title}</p>
          <p>{note.date}</p>
          <button onClick={() => deleteNotification(note.id)}>Delete</button>
        </li>
  })
  return (
    <section className="Messages">
      <ul className="message-list">
          { messagelist }
        </ul>
    </section>
  )
}

export default Messages;