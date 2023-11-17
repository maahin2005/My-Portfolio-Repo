function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function Resume() {
  window.location.href = "/";
}

let linksPage = document.querySelectorAll(".primary-navigation > li>a");

const outputElement = document.getElementById("output");
const text = ["Greetings, ", "I'm Mahin Malek."];
let currentIndex = 0;
const delay = 3000;

function animateText() {
  outputElement.innerHTML = null;

  outputElement.innerHTML += text[currentIndex] + " ";
  currentIndex = (currentIndex + 1) % text.length;
}

setInterval(animateText, delay);

animateText(0);

// let mail = document.getElementById("mailTO");

// console.log(mail);

// mail.addeventListener("click", () => {

// })

function redirectToEmail() {
  // Replace recipient@example.com with the actual email address
  var emailRecipient = "mahin.malek2005@gmail.com";

  // Use the 'mailto' URL scheme to open the default email client
  window.open("mailto:" + emailRecipient, "_blank");
}
