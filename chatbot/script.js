// Rule-based chatbot logic
function getResponse(userInput) {
    userInput = userInput.toLowerCase().trim();

    // Rule-based responses
    if (userInput === "hello" || userInput === "hi") {
        return "Hello! How can I help you today?";
    } else if (userInput === "how are you") {
        return "I'm a bot, but I'm doing well! How about you?";
    } else if (userInput === "what is your name") {
        return "I am a simple rule-based chatbot!";
    } else if (userInput === "bye") {
        return "Goodbye! Have a great day!";
    } else if (userInput.includes("time")) {
        return `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (userInput.includes("date")) {
        return `Today's date is ${new Date().toLocaleDateString()}.`;
    } else if (userInput.includes("joke")) {
        return "Why don't programmers like nature? It has too many bugs!";
    } else if (userInput.includes("your creator")) {
        return "I was created by a team of developers!";
    } else if (userInput === "help") {
        return "I can respond to 'hello', 'how are you', tell the time and date, or even tell a joke!";
    } else {
        return "Sorry, I don't understand that. Can you ask something else?";
    }
}

// Send the message and get a response
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;

    // Do nothing if input is empty
    if (!userInput.trim()) return;

    // Display user message
    displayMessage(userInput, 'user');

    // Get chatbot response
    const botResponse = getResponse(userInput);

    // Display bot response
    displayMessage(botResponse, 'bot');

    // Clear input field
    inputField.value = '';
}

// Display message in chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chatbox
    chatBox.scrollTop = chatBox.scrollHeight;
}
