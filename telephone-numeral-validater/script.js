const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const p = document.createElement("p");

clearBtn.addEventListener("click", (event) => {
  userInput.value = "";

  while (resultsDiv.firstChild) {
    resultsDiv.removeChild(resultsDiv.firstChild);
  }
});

checkBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent immediate form submission after each input
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else {
    const result = regex.test(userInput.value);
    if (result) {
      p.innerHTML = `Valid US number: ${userInput.value}`;
      p.style.color = "green";
    } else {
      p.innerHTML = `Invalid US number: ${userInput.value}`;
      p.style.color = "red";
    }
  }
  p.style.fontSize = "larger";
  p.id = "results";
  resultsDiv.appendChild(p);
});
