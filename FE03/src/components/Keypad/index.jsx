import React from "react";
import Button from "../Button";

import "./keypad.css";

const Keypad = ({ result, setResult }) => {
  const keys = [
    { symbol: "clear" },
    { symbol: "=", isOperator: true },
    { symbol: "+", isOperator: true },
    { symbol: "9" },
    { symbol: "8" },
    { symbol: "7" },
    { symbol: "-", isOperator: true },
    { symbol: "6" },
    { symbol: "5" },
    { symbol: "4" },
    { symbol: "*", isOperator: true },
    { symbol: "3" },
    { symbol: "2" },
    { symbol: "1" },
    { symbol: "/", isOperator: true },
  ];

  const handleButtonClick = (symbol) => {
    if (symbol === "clear") setResult("0");
    else if (symbol === "=") setResult((prev) => eval(prev));
    else {
      setResult((prev) => {
        if (prev == 0) {
          if (symbol.match("[+-/*]")) {
            return prev;
          } else return symbol;
        } else return prev + symbol;
      });
    }
  };

  return (
    <div className="keypad--container">
      {keys.map(({ symbol, isOperator }) => (
        <Button symbol={symbol} isOperator={isOperator} handleClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default Keypad;
