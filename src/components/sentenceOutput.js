import React from "react";
import { FetchData } from "../utils/fetchData";
// output the sentence from the airtable database

const SentenceOutput = () => {
  const [sentence, setSentence] = React.useState("");
  const [category, setCategory] = React.useState("");
  const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
  const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;

  React.useEffect(() => {
    FetchData(queryUrl).then(data => {
      const dataRecord = data.records;
      const tempCategory = dataRecord.forEach(data => {
        console.log(data.fields.Category);
      });
    });
  });

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export { SentenceOutput };
