import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function addStep() {
    setStep((s) => s + 1);
  }

  function removeStep() {
    setStep((s) => s - 1);
  }

  function addCount() {
    setCount((c) => c + step);
  }
  function removeCount() {
    setCount((c) => c - step);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="app">
      <div className="steps">
        <input
          type="range"
          min="0"
          max="10"
          value = {step}
          onChange={(e) => setStep(parseInt(e.target.value))}
        >

        </input>
        <p>{step}</p>
      </div>
      <div className="counter">
        <button onClick={removeCount}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button onClick={addCount}>+</button>
      </div>
      <div className="Date">
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
