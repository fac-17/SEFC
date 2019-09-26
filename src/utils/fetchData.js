// This is where we do the API Call
const FetchData = () => {
  const airtableToken = process.env.REACT_APP_AIRTABLE_API_KEY;
  const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const queryUrl = `https://api.airtable.com/v0/${airtableBase}/Table%201?api_key=${airtableToken}`;

  const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    console.log(response.json);
    return response.json();
  };

  return fetch(queryUrl)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch fetchData failed ${err}`);
    });
};

export { FetchData };
