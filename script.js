// --- Part 1: Event Handling Example ---
const messageBtn = document.getElementById("messageBtn");
const messageText = document.getElementById("messageText");

messageBtn.addEventListener("click", () => {
  messageText.classList.toggle("hidden");
});

// --- Part 2a: Light/Dark Mode Toggle ---
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// --- Part 2b: Counter Game ---
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// --- Part 2c: Collapsible FAQ ---
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// --- Part 3: Form Validation ---
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default submission
  let valid = true;

  // Reset error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  if (nameInput.value.trim().length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Show success if all fields valid
  if (valid) {
    document.getElementById("formSuccess").classList.remove("hidden");
    form.reset();
  }
});