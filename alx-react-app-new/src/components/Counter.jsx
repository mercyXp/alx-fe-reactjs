import { useState } from 'react';

function Counter() {
  // initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>React Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
