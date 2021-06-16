import React from 'react';
import './Home.css';

const Home = ({addRandom}) => {

  return (
    <section className="Home">
      <button type="button" onClick={() => addRandom()} >New Random</button>
      <button>New Email</button>
    </section>
  )
}

export default Home;