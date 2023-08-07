import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstNum, setNum] = useState(0);

  const btnClickHandler = (e) => {
    if (e.target.value === "+") {
      setNum(firstNum + 1);
    } else {
      setNum(0);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{firstNum}</p>
        <button value="+" onClick={btnClickHandler}>+</button>
        <button onClick={btnClickHandler}>clear</button>
      </header>
    </div>
  );
}

export default App;
