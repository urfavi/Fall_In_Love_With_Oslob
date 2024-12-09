const searchButton = document.getElementById('searchButton');
const searchOverlay = document.getElementById('searchOverlay');
const closeButton = document.getElementById('closeButton');

searchButton.addEventListener('click', () => {
    searchOverlay.style.display = 'flex'; 
});

closeButton.addEventListener('click', () => {
    searchOverlay.style.display = 'none'; 
});

searchOverlay.addEventListener('click', (event) => {
    if (event.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
});