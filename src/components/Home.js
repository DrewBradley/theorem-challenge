import React, { useState } from 'react';

const Home = ({addRandom}) => {
  const newRandom = () => {
    addRandom("new message", "date here", "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=983&q=80")
  }

  return (
    <section classNames="Home">
      <button type="button" onClick={() => newRandom()} >New Random</button>
      <button>New Email</button>
    </section>
  )
}

export default Home;