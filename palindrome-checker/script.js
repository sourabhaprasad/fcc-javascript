const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const originalInput = textInput;

checkButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent immediate form submission after each input

  if (textInput.value === "") {
    alert("Please enter a value!");
  } else {
    const text = textInput.value
      .split(" ")
      .join("")
      .replace(/[^\w\s]|_/g, "")
      .toLowerCase();
    const reverseText = text.split("").reverse().join("");
    const existingResultP = document.getElementById("resultP");
    if (existingResultP) {
      // if there's an existing result paragraph, remove it
      resultDiv.removeChild(existingResultP);
    }
    const p = document.createElement("p");
    if (text === reverseText) {
      p.innerHTML = `Yay! <br /> <strong>${originalInput.value}</strong> is a palindrome!`;
    } else {
      p.innerHTML = `Nay. <br /> <strong>${originalInput.value}</strong> is not a palindrome!`;
    }
    p.style.fontSize = "larger";
    p.id = "resultP";
    resultDiv.appendChild(p);
  }
});
