import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const savedClicks = +window.localStorage.getItem("clicks");
  const [counter, setCounter] = useState(savedClicks);

  useEffect(() => {
    window.localStorage.setItem("clicks", counter);
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <div className="btns">
        <button onClick={() => setCounter(counter - 1)}>Lower</button>
        <button onClick={() => setCounter(counter + 1)}>More</button>
        <button
          onClick={() => setCounter(Math.round(Math.random() * (50 - 1) + 1))}
        >
          Random
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
