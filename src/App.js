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
      <header className="header">
        <h2>
          Truth
          <br />
          or
          <br />
          Dare
        </h2>
      </header>
      {!name ? (
        <div>
            {<NameInput name={name} setName={setName} />}
        </div>
      ) : (
        <div>
          <section className="checkbox">
            {<TruthOrDare selection={selection} setSelection={setSelection} />}
          </section>
          <section className="nameOutput">
            <h2>It's your turn:</h2>
            {<NameOutput name={name} />}
          </section>
          <section className="sentenceOutput">
            {<SentenceOutput selection={selection} />}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
