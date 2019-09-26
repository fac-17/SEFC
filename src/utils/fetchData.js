// This is where we do the API Call

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  console.log(response);
  return response;
};

const FetchData = queryUrl => {
  return fetch(queryUrl)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch fetchData failed ${err}`);
    });
};

export { FetchData };
