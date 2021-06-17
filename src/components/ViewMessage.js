import React, { useEffect, useState } from 'react';
import { useParams, Prompt } from "react-router-dom";
import './Messages.css';

const ViewMessage = ({ notifications, deleteNotification }) => {
  const params = useParams();
  const ID = parseInt(params.id)

  const note = notifications.filter(note => {
    return note.id === parseInt(params.id)
  })

  // const onUnload = (e) => {
  //   e.preventDefault()
  //   console.log("This should happen when you leave")
  //   deleteNotification(ID)
  // }

  // useEffect(() => {
  //   window.addEventListener('beforeunload', onUnload);

  //   return function cleanup () {
  //     window.removeEventListener('beforeunload', onUnload);
  //   }
  // }, [])

  return (
    <section className="Messages">
      { note.length ? 
      <div className="message">
          <img src={`${note[0].image}`}/> 
          <article>
            <h2>{note[0].title}</h2>
            <p>{note[0].date}</p>
          </article>
          <article>
            <button 
              onClick={() => deleteNotification(note[0].id)}>Delete
            </button>
          </article>
        </div> :
        <div>
          <h1>This email has been deleted!</h1>
        </div> }
        <Prompt
          when={window.unload}
          message='Leaving will delete this notification.'
        />
    </section>
  )
}

export default ViewMessage;