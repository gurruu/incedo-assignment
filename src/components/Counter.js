import React, { useState, useEffect } from 'react';

const Counter = () => {
  // State to manage the number
  const [count, setCount] = useState(0);

  // useEffect to update the document title when the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;

    // Clean-up function (optional)
    return () => {
      document.title = 'React App'; // Reset the document title on component unmount
    };
  }, [count]); // Dependency array ensures the effect runs only when count changes

  // Function to handle button click and increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
