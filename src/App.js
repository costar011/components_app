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
  border: ${(props) => (props.isBorder ? "1px solid #999" : "none")};
  border-radius: 5px;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
    color: #999;
  }
`;

class App extends React.Component {
  render() {
    return (
      <h1>
        <BButton />
      </h1>
    );
  }
}

export default App;
