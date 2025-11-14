import React, { useRef } from "react";

function UseRefEx() {
  const inputRef = useRef(null); // 1. Create a ref

  const handleFocus = () => {
    inputRef.current.focus(); // 2. Access the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default UseRefEx;
