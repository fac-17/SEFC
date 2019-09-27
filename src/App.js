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
            {<TruthOrDare selection={selection} setSelection={setSelection} />}
            {<NameOutput name={name} />}
            {<SentenceOutput selection={selection} />}
        </div>
      )}
    </div>
  );
}

export default App;
