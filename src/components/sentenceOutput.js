import React from "react";
import { FetchData } from "../utils/fetchData";
// output the sentence from the airtable database

const SentenceOutput = () => {
  const [sentence, setSentence] = React.useState("");
  const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
  const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;
  //api.airtable.com/v0/appHuknKWgmu5SFGH/Table%201?api_key=keyKEsyr442uQbgY1
  https: console.log("im queryUrl", queryUrl);

  React.useEffect(() => {
    FetchData(queryUrl).then(data => {
      console.log(data);
    });
  });

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export { SentenceOutput };
