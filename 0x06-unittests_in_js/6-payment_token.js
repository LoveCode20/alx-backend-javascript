function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Resolving with undefined if not successful
  }
}

module.exports = getPaymentTokenFromAPI;
