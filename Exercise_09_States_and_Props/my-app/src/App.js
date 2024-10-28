import React, { useState } from 'react';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState('Student');
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter with Dynamic Greeting</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <Greeting name={name} />
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;