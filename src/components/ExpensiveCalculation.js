import React, { useMemo } from 'react';

const calculateFactorial = (n) => {
  // Simulating an expensive calculation (factorial in this case)
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
};

const ExpensiveCalculation = ({ value }) => {
  // Use useMemo to memoize the result of the expensive calculation
  const result = useMemo(() => calculateFactorial(value), [value]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>Input Value: {value}</p>
      <p>Result (Factorial): {result}</p>
    </div>
  );
};

export default ExpensiveCalculation;
