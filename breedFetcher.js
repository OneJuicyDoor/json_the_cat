const request = require('request');
const breedId = process.argv[2];
const breedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedId}`;

request(breedUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const breedData = JSON.parse(body);
  if (breedData && breedData.length > 0) {
    const breed = breedData[0];
    console.log('Description:', breed.description);
  } else {
    console.log('No results found.');
  }
});
