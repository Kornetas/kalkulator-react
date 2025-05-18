import styled from "styled-components";

export const Wrapper = styled.div`
  width: 320px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
  font-family: "Courier New", monospace;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 1;
`;

export const Display = styled.div`
  background: #000;
  color: #0f0;
  padding: 20px;
  text-align: right;
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 1px solid #333;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Button = styled.button`
  padding: 20px;
  font-size: 1.2rem;
  border: 1px solid #444;

  background: ${({ $special }) =>
    $special === "equals"
      ? "#4caf50"
      : $special === "clear"
      ? "#d32f2f"
      : $special === "func"
      ? "#002"
      : $special === "operator"
      ? "#1a1a1a"
      : $special === "back"
      ? "#263238"
      : "rgba(30, 30, 30, 0.95)"};

  color: ${({ $special }) =>
    $special === "equals" || $special === "clear"
      ? "#fff"
      : $special === "func"
      ? "#90caf9"
      : $special === "operator"
      ? "#ffeb3b"
      : $special === "back"
      ? "#ffa726"
      : "#fff"};

  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.1s;

  &:hover {
    background: ${({ $special }) =>
      $special === "equals"
        ? "#66bb6a"
        : $special === "clear"
        ? "#e53935"
        : $special === "func"
        ? "#455a64"
        : $special === "operator"
        ? "#333"
        : $special === "back"
        ? "#37474f"
        : "#444"};

    color: ${({ $special }) =>
      $special === "equals" || $special === "clear"
        ? "#fff"
        : $special === "operator"
        ? "#fff"
        : $special === "back"
        ? "#fff"
        : "#0ff"};

    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: ${({ $special }) =>
      $special === "operator"
        ? "0 0 8px #0ff"
        : $special === "back"
        ? "0 0 6px #ffa726"
        : "0 0 5px rgba(255, 255, 255, 0.2)"};
  }
`;

export const HistoryWrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
`;

export const HistoryTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #ccc;
`;

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HistoryItem = styled.li`
  font-family: monospace;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 5px;
  color: #aaa;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const ClearHistoryButton = styled.button`
  margin-top: 20px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #777;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 6px;
  color: #ddd;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #f0f;
  }
`;
