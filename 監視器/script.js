document.addEventListener('DOMContentLoaded', function() {
    const videoStream = document.getElementById('videoStream');
    const refreshBtn = document.getElementById('refreshBtn');
    
    // Replace with your public IP and port
    const baseUrl = 'http://192.168.1.109/stream';
    
    // Function to update the image source
    function updateStream() {
        const timestamp = new Date().getTime(); // To prevent caching
        videoStream.src = `${baseUrl}?t=${timestamp}`;
    }
    
    // Set the initial image source
    updateStream();
    
    // Add event listener to the refresh button
    refreshBtn.addEventListener('click', updateStream);
});
