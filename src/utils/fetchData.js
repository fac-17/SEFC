// This is where we do the API Call

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

// based on the selected category filter the api call results accordingly and then select a random sentence

const FetchData = (queryUrl, category) => {
  const newCategory = category.selection;
  return fetch(queryUrl)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch fetchData failed ${err}`);
    });
};

export { FetchData };
