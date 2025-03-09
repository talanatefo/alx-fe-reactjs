import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    const incremented = count + 1;
    setCount(incremented);
  }
  return (
    <div>
      <p>Current Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
