
// Array of messages
const messages = [
    "You are the light of my life, the reason for my smiles, and the one who makes my world brighter every single day. 🌹🌞💫 On this special day, I just want to remind you how much I love you and how thankful I am to have you in my life. 😘💖🙏 You complete me in ways I can't describe, and every moment with you feels like a beautiful dream come true. ✨🌈💭 I cherish every laugh 😂, every hug 🤗, and every second we spend together. 💕💑💖",
    "Every day with you feels like a beautiful adventure 🌍, and today, I just want to remind you how incredibly special you are to me. Your smile 😊 brightens my world, and your kindness 💫 fills my heart with so much joy. On this day of love, I want to celebrate you—the amazing person who makes my life so much better just by being in it. I’m so grateful for every moment we share, and I can’t wait to create even more memories together 🥰. You are my heart 💓, my happiness 😊, and my forever 💍.",
    "Please stay with me forever, my love. 💖 Fill my life with colors, because without you, everything feels dull. 🌈✨ You bring warmth to my heart, light to my soul, and joy to every moment we share. ☀️💓 Every laugh, every word, every glance from you makes me feel like the luckiest person alive. 🍀💘 You are my everything, the one I want to grow old with, face challenges, and celebrate victories together. 👫💍 Your love fills me with happiness, and every time I hold your hand, the world makes sense.",
    "🌍💫 On this special day, I have something to ask. Will you be by my side forever, to cherish, adore, and love with all my heart for the rest of our lives? 💑💍❤️ Please say yes, because my world is incomplete without you. 🥺💕"
];

let currentIndex = 0;  // To track the current message index

// Get the message element and buttons
const messageElement = document.getElementById("myParagraph");
const previousBtn = document.getElementById("changeTextBtn");
const nextBtn = document.getElementById("changeNextTextBtn");

// Update the message content
function updateMessage() {
    messageElement.textContent = messages[currentIndex];
}

// Event listener for "Previous" button
previousBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;  // Decrease index for the previous message
        updateMessage();
    }
    if(currentIndex==3){
        document.getElementById("salutation").style.display="flex";
        nextBtn.style.cursor="none";
    }
    else{
        document.getElementById("salutation").style.display="none";
        nextBtn.style.cursor="pointer";
    }
});

// Event listener for "Next" button
nextBtn.addEventListener("click", function() {
    if (currentIndex < messages.length - 1) {
        currentIndex++;  // Increase index for the next message
        updateMessage();
    }
    if(currentIndex==3){
        document.getElementById("salutation").style.display="flex";
        nextBtn.style.cursor="none";
    }
    else{
        document.getElementById("salutation").style.display="none";
        nextBtn.style.cursor="pointer";
    }
});
// Initial message display
updateMessage();
