// declare and event deligation
const galleryContainer = document.getElementById('gallery');
const Container = document.getElementById('container');
const expandedImg = document.getElementById('expandedImg');
const closeBtn = document.querySelector('.closebtn');

// Event delegation to open the enlarged image
galleryContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('gallery-img')) {
        const imgSrc = event.target.src;
        const imgAlt = event.target.alt;

        expandedImg.src = imgSrc;
        expandedImg.alt = imgAlt;
        Container.style.display = 'block';
    }
});

// Event delegation to close the enlarged image
document.addEventListener('click', (event) => {
    if (event.target === Container || event.target === closeBtn) {
        Container.style.display = 'none';
    }
});