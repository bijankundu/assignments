import React, { useState } from "react";
import Header from "./components/Header";
import Keypad from "./components/Keypad";

import "./styles/app.css";

const App = () => {
  const [result, setResult] = useState("0");

  return (
    <main>
      <section className="calculator">
        <Header result={result} />
        <Keypad result={result} setResult={setResult} />
      </section>
    </main>
  );
};

export default App;
