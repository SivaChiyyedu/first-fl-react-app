import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function incrementButtonClick() {
    setCount((count) => count + 1);
  }
  function decrementButtonClick() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hi, hope you are doing good</h1>
      <h1>Welcome to our first freelancing project</h1>
      <div className="card">
        <h3>To increase the count click on below button</h3>
        <button onClick={incrementButtonClick}>Increment : {count}</button>
        <h3>To decrease the count click on below button</h3>
        <button onClick={decrementButtonClick}>Decrement : {count}</button>
      </div>
    </>
  );
}

export default App;
