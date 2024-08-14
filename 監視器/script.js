// JavaScript to refresh the image every 1 second
const imgElement = document.getElementById('photo');

function refreshImage() {
    const timestamp = new Date().getTime();
    imgElement.src = `http://192.168.1.109/jpg?${timestamp}`;
}

// Refresh the image every 1 second
setInterval(refreshImage, 1000);

// Initial load
refreshImage();
