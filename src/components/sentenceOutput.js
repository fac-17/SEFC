import React from "react";
import { FetchData } from "../utils/fetchData";
// output the sentence from the airtable database

const SentenceOutput = selection => {
  const [sentence, setSentence] = React.useState("");
  const [nextButtonClicked, setNextButtonClicked] = React.useState(0);
  const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
  const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;

  const handleButtonClick = () => {
    setNextButtonClicked(prevCount => prevCount + 1);
  };

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

  // show next question upon next button click

  React.useEffect(() => {
    const nextButton = document.getElementsByClassName("nextButton");
    console.log("nextButton", nextButton);
    if (nextButton) {
      nextButton.addEventListener("click", console.log("worked"));
    }
    // return () => window.removeEventListener("click", handleButtonClick);
  }, []);

  return (
    <div>
      <p>{sentence}</p>
      <button className="nextButton">Next</button>
    </div>
  );
};

export { SentenceOutput };
