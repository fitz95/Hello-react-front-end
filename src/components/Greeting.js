// components/Greeting.js

import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);

  if (greetings.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <p>Random Greeting: </p>
        <p>{greetings.greeting}</p>
      </div>
    </>
  );
};

export default Greeting;
