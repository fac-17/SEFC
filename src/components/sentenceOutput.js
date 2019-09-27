import React from "react";
import { FetchData } from "../utils/fetchData";
import "./sentenceOutput.css";
// output the sentence from the airtable database

const SentenceOutput = selection => {
  const [sentence, setSentence] = React.useState("");
  const [nextButtonClicked, setNextButtonClicked] = React.useState(0);

  const handleButtonClick = () => {
    setNextButtonClicked(prevCount => prevCount + 1);
  };

  // send in selected category and then show a random sentence

  React.useEffect(() => {
    const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
    const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
    const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;
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
        setSentence(randomElement);
      };

      dataRecord.filter(filterIfMatch);
      findRandomQuestion();
    });
  }, [nextButtonClicked, selection]);

  return (
    <section className="sentenceOutput">
      <p>{sentence}</p>
      <button onClick={handleButtonClick} className="nextButton">
        Next Truth or Dare
      </button>
    </section>
  );
};

export { SentenceOutput };
