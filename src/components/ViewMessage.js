import React from 'react';

const ViewMessage = ({notifications, deleteNotification}) => {
  const singleMessage = notifications.filter(note => {
    return <article className="dropdown-item">
          <img src={`${note.image}`}/> 
          <p>{note.title}</p>
          <p>{note.date}</p>
          <button onClick={() => deleteNotification(note.id)}>Delete</button>
        </article>
  })
  return (
    <section className="ViewMessage">
      
    </section>
  )
}

export default ViewMessage;