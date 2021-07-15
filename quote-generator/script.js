
// Get Qoute from API

async function getQoute() {
  const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQoute&lang=en&format=json`;

  const proxyUrl = `https://cors-anywhere.herokuapp.com/`;


  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}

// on Load
getQoute();