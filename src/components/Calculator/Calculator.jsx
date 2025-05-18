import React, { useState } from "react";
import { Wrapper, Display, ButtonGrid, Button } from "./Calculator.styles";

function Calculator() {
  // przechowuje to, co widzimy na ekranie kalkulatora
  const [input, setInput] = useState("");

  // obsługa kliknięcia przycisku
  const handleClick = (value) => {
    console.log("Kliknięto:", value); // debug
    setInput((prev) => prev + value);
  };
  return (
    <Wrapper>
      {/* Wyświetlacz pokazuje aktualny input */}
      <Display>{input || "0"}</Display>

      <ButtonGrid>
        {/* Każdy przycisk wywołuje handleClick z wartością */}
        <Button onClick={() => setInput("")}>C</Button>
        <Button onClick={() => {}}>←</Button>
        <Button onClick={() => handleClick("%")}>%</Button>
        <Button onClick={() => handleClick("/")}>/</Button>

        <Button onClick={() => handleClick("7")}>7</Button>
        <Button onClick={() => handleClick("8")}>8</Button>
        <Button onClick={() => handleClick("9")}>9</Button>
        <Button onClick={() => handleClick("*")}>*</Button>

        <Button onClick={() => handleClick("4")}>4</Button>
        <Button onClick={() => handleClick("5")}>5</Button>
        <Button onClick={() => handleClick("6")}>6</Button>
        <Button onClick={() => handleClick("-")}>-</Button>

        <Button onClick={() => handleClick("1")}>1</Button>
        <Button onClick={() => handleClick("2")}>2</Button>
        <Button onClick={() => handleClick("3")}>3</Button>
        <Button onClick={() => handleClick("+")}>+</Button>

        <Button onClick={() => handleClick("0")}>0</Button>
        <Button onClick={() => handleClick(".")}>.</Button>
        <Button onClick={() => {}}>=</Button>
      </ButtonGrid>
    </Wrapper>
  );
}

export default Calculator;
