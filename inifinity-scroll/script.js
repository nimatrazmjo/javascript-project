// unsplash API

const count = 10;
const apiKey = '';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
 

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    } catch (error) {
        
    }
}

getPhotos();  