// 1. DOM elements select karna
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// 2. Header ka greeting badalne wala function
function greetUser() {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name first!");
    return;
  }

  greeting.textContent = "Hello, " + name;
}

// 3. Box ka background color badalne wala function
function changeBoxColor(event) {
  const box = event.currentTarget;
  const colorName = box.textContent.trim().toLowerCase();
  box.style.backgroundColor = colorName;
}

// 4. Events attach karna
greetBtn.addEventListener("click", greetUser);

boxes.forEach(function (box) {
  box.addEventListener("click", changeBoxColor);
});
