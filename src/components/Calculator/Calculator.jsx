import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Wrapper, Display, ButtonGrid, Button } from "./Calculator.styles";

function Calculator() {
  const [input, setInput] = useState("");

  // Obsługa kliknięcia przycisku (cyfra, operator)
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Obsługa przycisku "="
  const handleEvaluate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      console.error("Błąd w działaniu:", error);
      setInput("Error");
    }
  };

  // Usuwanie ostatniego znaku ←
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Obsługa procenta: np. 50 → 0.5
  const handlePercent = () => {
    try {
      const result = evaluate(input) / 100;
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // Reset (C)
  const handleClear = () => {
    setInput("");
  };

  return (
    <Wrapper>
      <Display>{input || "0"}</Display>

      <ButtonGrid>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleBackspace}>←</Button>
        <Button onClick={handlePercent}>%</Button>
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
        <Button onClick={handleEvaluate}>=</Button>
      </ButtonGrid>
    </Wrapper>
  );
}

export default Calculator;
