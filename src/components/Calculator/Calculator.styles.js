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
  font-size: 2rem;
  text-align: right;
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
