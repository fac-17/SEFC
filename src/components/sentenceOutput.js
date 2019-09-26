import React from "react";
import { FetchData } from "../utils/fetchData";
// output the sentence from the airtable database

const SentenceOutput = () => {
  const [sentence, setSentence] = React.useState("");

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export { SentenceOutput };
