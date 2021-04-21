import React, { useRef } from "react";

const Button = ({ label, action }) => {
  const buttonRef = useRef(null);
  return (
    <button onClick={() => console.log(buttonRef.current)} ref={buttonRef}>
      Click Me
    </button>
  );
};

export default Button;
