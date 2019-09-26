import React from "react";
import { FetchData } from "../utils/fetchData";
// output the sentence from the airtable database

const SentenceOutput = selection => {
  const [sentence, setSentence] = React.useState("");
  const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
  const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;

  // send in selected category and then show a random sentence

  React.useEffect(() => {
    FetchData(queryUrl, selection).then(data => {
      const dataRecord = data.records;

      const sentenceArray = [];
      const filterIfMatch = data => {
        const apiCat = data.fields.Question;
        if (data.fields.Category === selection.selection) {
          sentenceArray.push(apiCat);
          return apiCat;
        }
      };

      const findRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * sentenceArray.length);
        const randomElement = sentenceArray[randomIndex];
        console.log("randomQuestion", randomElement);
        setSentence(randomElement);
      };

      dataRecord.filter(filterIfMatch);
      findRandomQuestion();
    });
  }, []);

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export { SentenceOutput };
