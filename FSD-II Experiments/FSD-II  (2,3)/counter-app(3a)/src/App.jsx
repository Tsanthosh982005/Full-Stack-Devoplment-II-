import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <h1>Counter: {count}</h1>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default CounterButton;