import React from "react";
import { Wrapper, Display, ButtonGrid, Button } from "./Calculator.styles";

function Calculator() {
  return (
    <Wrapper>
      <Display>0</Display>

      <ButtonGrid>
        <Button>C</Button>
        <Button>←</Button>
        <Button>%</Button>
        <Button>/</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>x</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>

        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </ButtonGrid>
    </Wrapper>
  );
}

export default Calculator;
