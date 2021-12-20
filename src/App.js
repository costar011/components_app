import React from "react";
import BButton from "./BButton";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
`;

const Btn = styled.button`
  width: 200px;
  height: 25px;
  margin: 10px;

  outline: none;
  border: ${(props) => (props.isBorder ? "1px solid #6b6b6b" : "none")};
  border-radius: 5px;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #595959;
    color: #ffff;
  }
`;

class App extends React.Component {
  render() {
    return (
      <h1>
        <Btn>btn</Btn>
        <Btn>btn1</Btn>
      </h1>
    );
  }
}

export default App;
