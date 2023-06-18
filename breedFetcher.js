const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(breedUrl, function (error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const breedData = JSON.parse(body);
    if (breedData.length === 0) {
      callback('No results found.', null);
      return;
    }
    const breed = breedData[0];
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };
