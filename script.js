// Display current date
const dateElement = document.getElementById("currentDate");
const today = new Date();
dateElement.textContent = today.toDateString();

// Rotate breaking news messages
const breakingMessages = [
    "Breaking: Stay informed with the latest verified news from News Tip.",
    "Update: Global markets respond to economic reforms.",
    "Alert: Technology sector records significant growth."
];
function showHome() {
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("contactContent").style.display = "none";
}

function showContact() {
    document.getElementById("contactContent").style.display = "block";
    document.getElementById("homeContent").style.display = "none";
}
<script src="script.js"></script>
let index = 0;

setInterval(() => {
    index = (index + 1) % breakingMessages.length;
    document.getElementById("breakingNews").textContent =
        breakingMessages[index];
}, 5000);
