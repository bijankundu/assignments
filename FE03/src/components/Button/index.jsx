import React from "react";

import "./button.css";

const Button = ({ handleClick, symbol, isOperator = false }) => {
  return (
    <div
      className={`${symbol === "clear" && "btn--clear"} ${isOperator && "btn--operator"} btn`}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </div>
  );
};

export default Button;
