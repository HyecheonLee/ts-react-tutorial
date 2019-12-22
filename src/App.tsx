import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";

const App: React.FC = () => {
  return (
      <Greetings
          name={"리액트"}
          mark={"xx"}
          onClick={name => console.log(name)}
      />
  );
};

export default App;
