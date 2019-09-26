import React from "react";
import "./App.css";
import { NameInput } from "./components/nameInput";
import { NameOutput } from "./components/nameOutput";
import { TruthOrDare } from "./components/TruthOrDare";
import { SentenceOutput } from "./components/sentenceOutput";

function App() {
  const [name, setName] = React.useState("");
  const [selection, setSelection] = React.useState("Truth");

  return (
    <div className="App">
      <header className="header"></header>
      {!name ? (
        <div>
          <section className="nameInput">
            <h2>Welcome to Truth or Dare</h2>
            <p>Enter the players names below</p>
            {<NameInput name={name} setName={setName} />}
          </section>
        </div>
      ) : (
        <div>
          <section className="checkbox">
            {<TruthOrDare selection={selection} setSelection={setSelection} />}
          </section>
          <section className="nameOutput">
            <h2>And the winner is...</h2>
            {<NameOutput name={name} />}
          </section>
          <section className="sentenceOutput">
            {<SentenceOutput selection={selection} />}
          </section>
          <section className="nextButton">{/* <NextButton */}</section>
        </div>
      )}
    </div>
  );
}

export default App;
