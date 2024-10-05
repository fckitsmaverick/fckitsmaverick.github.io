let currentIndex = 0; // To keep track of the currently displayed image

function openCarousel(index) {
    const modal = document.getElementById('carouselModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    const images = document.querySelectorAll('.gallery img');
    currentIndex = index; // Set the current index to the clicked image
    modalImage.src = images[currentIndex].src; // Set the modal image source
    caption.innerHTML = images[currentIndex].alt; // Set the caption
    modal.style.display = "flex"; // Show the modal

    // Add keyboard navigation
    document.addEventListener('keydown', navigateCarousel);
}

function closeCarousel(event) {
    const modal = document.getElementById('carouselModal');
    if (event.target === modal || event.target.className === 'close') {
        modal.style.display = "none"; // Hide the modal
        document.removeEventListener('keydown', navigateCarousel); // Remove the keydown event listener
    }
}

function navigateCarousel(event) {
    const images = document.querySelectorAll('.gallery img');
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length; // Go to the next image
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to the previous image
    }

    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modalImage.src = images[currentIndex].src; // Update the image source
    caption.innerHTML = images[currentIndex].alt; // Update the caption
}
