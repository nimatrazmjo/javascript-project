// unsplash API
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;

let imageLoaded = 0;
let totalImages = 0;
let photoArray = [];

const count = 10;
const apiKey = 'esrLNqTivgV6E1z3WNHqB85mfOftoDK98JYUh9VRa4k';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imageLoadedStatus() {
    imageLoaded++;
    if (imageLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

function setAttributes(item, attributes) {
    for (const key in attributes) {
        item.setAttribute(key, attributes[key]);
    }
}

function loadImages(photos) {
    totalImages = photos.length;
    imageLoaded = 0;
    photos.forEach((photo) => {
        const aHref = document.createElement('a');
        setAttributes(aHref, {
            href: photo.links.html,
            target: '_blank'
        });

        const image = document.createElement('img');
        setAttributes(image, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        image.addEventListener('load', imageLoadedStatus);

        aHref.appendChild(image);
        imageContainer.appendChild(aHref);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const photos = await response.json();
        loadImages(photos);
    } catch (error) {

    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        getPhotos();
    }
});

getPhotos();