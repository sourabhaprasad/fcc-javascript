const numInput = document.getElementById("number");
const numButton = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const output = document.createElement("p");

numButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputNumber = parseInt(numInput.value);

  if (isNaN(inputNumber)) {
    output.innerHTML = "<p>Please enter a valid number</p>";
  } else if (inputNumber <= 0) {
    output.innerHTML =
      "<p>Please enter a number greater than or equal to 1</p>";
  } else if (inputNumber >= 4000) {
    output.innerHTML =
      "<p>Please enter a number less than or equal to 3999</p>";
  } else {
    const romanConverter = (num) => {
      let result = ""; // to prevent erasing previous inputs each time
      let romanNums = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      for (let val in romanNums) {
        for (let i = romanNums[val]; num >= i; num -= i) result += val;
      }
      console.log(result);
      return result;
    };
    output.innerHTML = `<p>${romanConverter(inputNumber)}</p>`;
  }
  output.style.fontSize = "larger";
  output.id = "resultP";
  outputDiv.appendChild(output);
});
