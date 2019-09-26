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

      const filterIfMatch = data => {
        console.log("inside filterIF match");
        const apiCat = data.fields.Question;
        if (data.fields.Category === selection.selection) {
          console.log(apiCat);
          return apiCat;
        }
      };
      const tempCategory = dataRecord.filter(filterIfMatch);
      // return data.fields.category === selection;
      //   console.log(data.fields);
      //   console.log(data.fields.Category);
      //   console.log(selection.selection);
      //   console.log(data.fields.Category === selection.selection);
      // const filter = tempCategory.filter(cat => cat ? 'truth' : 'dare')
      // console.log(filter)
    });
  });

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export { SentenceOutput };
