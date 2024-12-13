const reportButton = document.getElementById('report-button');
const reportBox = document.getElementById('report-box');
const sendButton = document.getElementById('send-button');

// Toggle die Box beim Klick auf den Button
reportButton.addEventListener('click', () => {
    reportBox.style.display = reportBox.style.display === 'block' ? 'none' : 'block';
});

// Aktion für den Senden-Button
sendButton.addEventListener('click', () => {
    const errorMessage = document.getElementById('error-message').value;
    if (errorMessage.trim()) {
        reportBox.style.display = 'none';
        sendErrorMessage();
        document.getElementById('error-message').value = '';
    }
});

function closeBox() {
    document.querySelector('.centered-box').style.display = 'none';
}