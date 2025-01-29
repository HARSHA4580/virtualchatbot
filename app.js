// app.js (Front-End)
document.getElementById('send-message').addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    const chatBox = document.getElementById('chat-box');

    if (userMessage) {
        // Display user message
        chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        
        // Send the message to the server
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage }),
        })
        .then(response => response.json())
        .then(data => {
            // Display bot response
            chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.message}</p>`;
            document.getElementById('user-message').value = '';  // Clear the input
        })
        .catch(error => console.error('Error:', error));
    }
}
