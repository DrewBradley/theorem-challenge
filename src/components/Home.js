import React from 'react';


const Home = ({addRandom}) => {

  return (
    <section classNames="Home">
      <button type="button" onClick={() => addRandom()} >New Random</button>
      <button>New Email</button>
    </section>
  )
}

export default Home;