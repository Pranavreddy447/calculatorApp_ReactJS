import { React, useState } from "react";
import { SocialIcon } from "react-social-icons";

function App() {

  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const update = (value) => {
    if ((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1))) || (calc.length > 15)) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setRes(eval(calc + value).toString());
    }
  }

  const reset = () => {
    setCalc("");
    setRes("Ans");
  }

  const del = () => {
    const newCalc = calc.slice(0, -1);
    setCalc(newCalc);
    setRes(eval(newCalc).toString());
  }

  const display = () => {
    setCalc(eval(calc).toString());
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={() => { update(i.toString()) }} key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="header">CALCULATOR APP</div>
        <div className="credits">
          MADE BY PRANAV REDDY GUNNALA -  <SocialIcon url="https://www.linkedin.com/in/gunnala-pranav-reddy-7a230b1b0/" style={{ height: 25, width: 25, marginRight: 5 }} />
          <SocialIcon url="https://github.com/Pranavreddy447" bgColor="white" style={{ height: 25, width: 25 }} />

        </div>
        <div className="screen">
          {{ res } ? <span>{res}</span> : ""}
          <div>{calc || '0'}</div>
        </div>

        <div className="operators">
          <button onClick={() => { update("+") }}>+</button>
          <button onClick={() => { update("-") }}>-</button>
          <button onClick={() => { update("*") }}>x</button>
          <button onClick={() => { update("/") }}>/</button>
          <button onClick={() => { del() }} className="delete">DEL</button>
          <button onClick={() => { reset() }} className="reset">AC</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => { update("0") }}>0</button>
          <button onClick={() => { update(".") }} >.</button>
          <button onClick={display}>=</button>
        </div>
      </div>
    </div >
  );
}

export default App;