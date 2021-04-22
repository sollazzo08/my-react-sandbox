import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    let countValue = count;
    setCounter(countValue + 1);
  };

  const handleDecrement = () => {
    //clone of the count state
    let countValue = count;
    setCounter(countValue - 1);
  };
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <span>{count}</span>
    </>
  );
};

export default Counter;
