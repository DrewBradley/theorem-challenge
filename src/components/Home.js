import React from 'react';
import './Home.css';

const Home = ({addRandom, addEmail}) => {

  return (
    <section className="Home">
      <button 
        type="button" 
        onClick={() => addRandom()}>
        New Random
      </button>
      <button 
        type="button" 
        onClick={() => addEmail()}>
        New Email
      </button>
    </section>
  )
}

export default Home;