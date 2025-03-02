function toggleMenu() {
    document.querySelector(".nav-container").classList.toggle("active");
}


// Function to Toggle Chat Window
function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = (chatContainer.style.display === "flex") ? "none" : "flex";
}

// Function to Send Message
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user-message");

    setTimeout(() => {
        let botReply = getBotResponse(userInput);
        addMessage(botReply, "bot-message");
    }, 1000);

    document.getElementById("user-input").value = "";
}

// Function to Add Messages
function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot Responses
function getBotResponse(input) {
    input.toLowerCase()
    let responses = {
        "hello": "Hi there! How can I assist you today? 😊",
        "hi": "Hello! Need help with anything? 🤖",
        "hey": "Hey! What can I do for you? 😃",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",

        "help": "Sure! What do you need help with? You can ask me about our services, website navigation, or anything else!",
        "what can you do": "I can help answer your questions, guide you through the site, and provide general information. Try asking something!",

        "what is your name?": "I'm your friendly SAMA Chatbot! You can call me SAMABOT. 😊",
        "who created you?": "I was created by Eric to assist you. Cool, right? 😎",
        "who is your creator?": "I was created by Eric to assist you. Cool, right? 😎",
        "what": "I answer questions, provide information, and help you navigate the site!",

        "tell me a joke": "Sure! Why don’t skeletons fight each other? Because they don’t have the guts! 😆",
        "do you like me": "Of course! I like everyone who chats with me. 😊",
        "do you have feelings": "I don’t have feelings, but I can still have fun chatting with you!",

        "bye": "Goodbye! Have a fantastic day! 👋",
        "goodbye": "Take care! If you need anything, I'll be here. 😊",
        "see you": "See you! Come back anytime!",
        
        "default": "I'm not sure how to respond to that. Ask about the website"
    };

    input = input.toLowerCase();
    return responses[input] || responses["default"];
}

//Funtion Login
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".button-submit");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        // Reset errors
        emailError.style.display = "none";
        passwordError.style.display = "none";
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");

        // Email validation
        if (email === "") {
            emailError.textContent = "Email is required.";
            emailError.style.display = "block";
            emailInput.classList.add("error");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Please input a valid email.";
            emailError.style.display = "block";
            emailInput.classList.add("error");
            isValid = false;
        }

        // Password validation
        if (password === "") {
            passwordError.textContent = "Password is required.";
            passwordError.style.display = "block";
            passwordInput.classList.add("error");
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            passwordError.style.display = "block";
            passwordInput.classList.add("error");
            isValid = false;
        }

        // If valid, proceed with login
        if (isValid) {
            if (email === "sama@gmail.com" && password === "sama123") {
                window.location.href = "index.html"; 
            } else {
                passwordError.textContent = "Invalid email or password.";
                passwordError.style.display = "block";
                passwordInput.classList.add("error");
            }
        }
    });
});


