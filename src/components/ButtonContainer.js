import React, { useCallback } from 'react';

// ChildComponent functional component
const ChildComponent = ({ wrappedCallback }) => {
  // Display a message when the wrapped callback is called
  const handleButtonClick = () => {
    console.log("Wrapped Callback is called!");
    wrappedCallback();
  };

  return (
    <div>
      <p>Child Component</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};


const ButtonContainer = () => {
  
  const callbackFunction = () => {
    console.log("Callback Function is called!");
    // You can perform additional logic here
  };

  // Use useCallback to wrap the callback function
  const wrappedCallback = useCallback(callbackFunction, []);

  return (
    <div>
      <p>Button Container</p>
      {/* Render ChildComponent and pass down the wrapped callback */}
      <ChildComponent wrappedCallback={wrappedCallback} />
    </div>
  );
};

export default ButtonContainer;
