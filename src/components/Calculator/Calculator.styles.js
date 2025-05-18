import styled from "styled-components";

export const Wrapper = styled.div`
  width: 320px;
  margin: 50px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  font-family: "Courier New", monospace;
`;

export const Display = styled.div`
  background: #111;
  color: #0f0;
  padding: 20px;
  text-align: right;
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  overflow-x: auto;
  white-space: nowrap;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Button = styled.button`
  padding: 20px;
  font-size: 1.2rem;
  border: 1px solid #ddd;
  background: #f1f1f1;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
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
  color: #333;
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
  color: #444;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;

export const ClearHistoryButton = styled.button`
  margin-top: 20px;
  padding: 10px 12px;
  background: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;
