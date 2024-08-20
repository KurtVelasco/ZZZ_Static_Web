function changeMessageText() {
    fetch('message.txt') // Assuming 'message.txt' is in the same directory
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('.message-text').textContent = data;
        })
        .catch(error => console.error('Error fetching the text file:', error));
    }