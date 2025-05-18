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
// Załaduj dźwięki
const soundMap = {
  default: new Audio("/sound1.mp3"),
  digits: new Audio("/sound.mp3"),
  equals: new Audio("/=.mp3"),
  clear: new Audio("/C.mp3"),
};

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
      if (!input.trim()) return;
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

  // funkcja do odtwarzania dźwięku na podstawie przycisku
  const playSoundForKey = (key) => {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const equals = ["="];
    const clear = ["C"];

    let sound;

    if (digits.includes(key)) {
      sound = soundMap.digits;
    } else if (equals.includes(key)) {
      sound = soundMap.equals;
    } else if (clear.includes(key)) {
      sound = soundMap.clear;
    } else {
      sound = soundMap.default;
    }

    try {
      sound.currentTime = 0;
      sound.play();
    } catch (err) {
      console.warn(
        `Nie udało się odtworzyć dźwięku dla klawisza "${key}"`,
        err
      );
    }
  };

  return (
    <Wrapper>
      <Display fontSize={getFontSize()}>{input || "0"}</Display>

      <ButtonGrid>
        {/* Rząd 1 */}
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey("%");
            handlePercent();
          }}
        >
          %
        </Button>
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey("+/-");
            handleToggleSign();
          }}
        >
          +/-
        </Button>

        <Button
          $special="clear"
          onClick={() => {
            playSoundForKey("C");
            handleClear();
          }}
        >
          C
        </Button>
        <Button
          $special="back"
          onClick={() => {
            playSoundForKey("←");
            handleBackspace();
          }}
          title="Backspace"
        >
          ⌫
        </Button>

        {/* Rząd 2 */}
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey("√");
            handleClick("sqrt(");
          }}
        >
          √
        </Button>
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey("^2");
            handleClick("^2");
          }}
        >
          x²
        </Button>
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey("(");
            handleClick("(");
          }}
        >
          (
        </Button>
        <Button
          $special="func"
          onClick={() => {
            playSoundForKey(")");
            handleClick(")");
          }}
        >
          )
        </Button>

        {/* Rząd 3 */}
        <Button
          onClick={() => {
            playSoundForKey("7");
            handleClick("7");
          }}
        >
          7
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("8");
            handleClick("8");
          }}
        >
          8
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("9");
            handleClick("9");
          }}
        >
          9
        </Button>
        <Button
          $special="operator"
          onClick={() => {
            playSoundForKey("/");
            handleClick("/");
          }}
        >
          /
        </Button>

        {/* Rząd 4 */}
        <Button
          onClick={() => {
            playSoundForKey("4");
            handleClick("4");
          }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("5");
            handleClick("5");
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("6");
            handleClick("6");
          }}
        >
          6
        </Button>
        <Button
          $special="operator"
          onClick={() => {
            playSoundForKey("*");
            handleClick("*");
          }}
        >
          *
        </Button>

        {/* Rząd 5 */}
        <Button
          onClick={() => {
            playSoundForKey("1");
            handleClick("1");
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("2");
            handleClick("2");
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            playSoundForKey("3");
            handleClick("3");
          }}
        >
          3
        </Button>
        <Button
          $special="operator"
          onClick={() => {
            playSoundForKey("-");
            handleClick("-");
          }}
        >
          -
        </Button>

        {/* Rząd 6 */}
        <Button
          onClick={() => {
            playSoundForKey("0");
            handleClick("0");
          }}
        >
          0
        </Button>
        <Button
          $special="operator"
          onClick={() => {
            playSoundForKey(".");
            handleClick(".");
          }}
        >
          .
        </Button>
        <Button
          $special="equals"
          onClick={() => {
            playSoundForKey("=");
            handleEvaluate();
          }}
        >
          =
        </Button>
        <Button
          $special="operator"
          onClick={() => {
            playSoundForKey("+");
            handleClick("+");
          }}
        >
          +
        </Button>
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
