import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <section className="nameInput">
          <h2>Welcome to Truth or Dare</h2>
          <p>Enter the players names below</p>
          {/* <NameInput /> */}
        </section>
        <section className="checkbox">{/* <TruthOrDare /> */}</section>
        <section className="sentenceOutput">{/* <SentenceOutput /> */}</section>
        <section className="nameOutput">{/* <NameOutput /> */}</section>
        <section calssName="nextButton">{/* <NextButton */}</section>
      </body>
    </div>
  );
}

export default App;
