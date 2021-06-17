import React from 'react';
import './Messages.css';

const Messages = ({notifications, deleteNotification}) => {
  const messagelist = notifications.map(note => {
    return <div className="message">
          <img src={`${note.image}`}/> 
          <article>
            <h2>{note.title}</h2>
            <p>{note.date}</p>
          </article>
          <article>
            <button>
              Read
            </button>
            <button 
              onClick={() => deleteNotification(note.id)}>Delete
            </button>
          </article>
        </div>
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