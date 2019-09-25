import React from "react";
import "./App.css";
import { NameInput } from "./components/nameInput";
import { TruthOrDare } from "./components/TruthOrDare";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <section className="nameInput">
        <h2>Welcome to Truth or Dare</h2>
        <p>Enter the players names below</p>
        {<NameInput />}
      </section>
      <section className="checkbox">
        <TruthOrDare />
      </section>
      <section className="sentenceOutput">{/* <SentenceOutput /> */}</section>
      <section className="nameOutput">{/* <NameOutput /> */}</section>
      <section className="nextButton">{/* <NextButton */}</section>
    </div>
  );
}

export default App;
