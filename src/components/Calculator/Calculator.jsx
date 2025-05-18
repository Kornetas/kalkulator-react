import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import {
  Wrapper,
  Display,
  ButtonGrid,
  Button,
  HistoryWrapper,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  ClearHistoryButton,
} from "./Calculator.styles";

function Calculator() {
  const [input, setInput] = useState("");

  // przechowuje historię działań + wczytaj historię z localStorage przy starcie
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem("calc-history");
    return stored ? JSON.parse(stored) : [];
  });

  // zapisuj historię do localStorage gdy się zmienia
  useEffect(() => {
    localStorage.setItem("calc-history", JSON.stringify(history));
  }, [history]);

  const clearHistory = () => {
    const confirmClear = window.confirm(
      "Czy na pewno chcesz wyczyścić historię?"
    );
    if (confirmClear) {
      setHistory([]);
    }
  };
  // Obsługa kliknięcia przycisku (cyfra, operator)
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Obsługa przycisku "="
  const handleEvaluate = () => {
    try {
      const result = evaluate(input);
      // Dodaj do historii (nowy obiekt: wyrażenie i wynik)
      setHistory((prevHistory) => [
        { expression: input, result: result.toString() },
        ...prevHistory,
      ]);
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

  // zmiana znaku "+/-"
  const handleToggleSign = () => {
    if (!input) return;
    try {
      const result = evaluate(`-1 * (${input})`);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // Reset (C)
  const handleClear = () => {
    setInput("");
  };

  // Dynamiczne skalowanie font-size
  const getFontSize = () => {
    const length = input.length;
    if (length > 20) return "1rem";
    if (length > 15) return "1.3rem";
    if (length > 10) return "1.6rem";
    return "2rem"; // domyślna wartość
  };

  return (
    <Wrapper>
      <Display fontSize={getFontSize()}>{input || "0"}</Display>

      <ButtonGrid>
        {/* Rząd 1 */}

        <Button onClick={handlePercent}>%</Button>
        <Button onClick={() => handleClick("/")}>/</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleBackspace}>←</Button>

        {/* Rząd 2 – Nowe funkcje */}
        <Button onClick={() => handleClick("sqrt(")}>√</Button>
        <Button onClick={() => handleClick("^2")}>x²</Button>
        <Button onClick={handleToggleSign}>+/-</Button>
        <Button onClick={() => handleClick("(")}>(</Button>

        {/* Rząd 3 */}
        <Button onClick={() => handleClick("7")}>7</Button>
        <Button onClick={() => handleClick("8")}>8</Button>
        <Button onClick={() => handleClick("9")}>9</Button>
        <Button onClick={() => handleClick(")")}>)</Button>

        {/* Rząd 4 */}
        <Button onClick={() => handleClick("4")}>4</Button>
        <Button onClick={() => handleClick("5")}>5</Button>
        <Button onClick={() => handleClick("6")}>6</Button>
        <Button onClick={() => handleClick("*")}>*</Button>

        {/* Rząd 5 */}
        <Button onClick={() => handleClick("1")}>1</Button>
        <Button onClick={() => handleClick("2")}>2</Button>
        <Button onClick={() => handleClick("3")}>3</Button>
        <Button onClick={() => handleClick("-")}>-</Button>

        {/* Rząd 6 */}
        <Button onClick={() => handleClick("0")}>0</Button>
        <Button onClick={() => handleClick(".")}>.</Button>
        <Button onClick={handleEvaluate}>=</Button>
        <Button onClick={() => handleClick("+")}>+</Button>
      </ButtonGrid>

      <ClearHistoryButton onClick={clearHistory}>
        🧹 Wyczyść historię
      </ClearHistoryButton>

      <HistoryWrapper>
        <HistoryTitle>Historia:</HistoryTitle>
        <HistoryList>
          {history.map((item, index) => (
            <HistoryItem
              key={index}
              onClick={() => setInput(item.expression)}
              title="Kliknij, aby ponownie użyć"
            >
              {item.expression} = <strong>{item.result}</strong>
            </HistoryItem>
          ))}
        </HistoryList>
      </HistoryWrapper>
    </Wrapper>
  );
}

export default Calculator;
