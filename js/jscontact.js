function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('show'); 
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('show'); 
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementsByClassName("popup");
    for (let i = 0; i < popup.length; i++) {
        if (event.target === popup[i]) {
            closePopup(popup[i].id); 
        }
    }
}