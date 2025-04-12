const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      input += value;
      display.value = input;
    }
  });
});

clearBtn.addEventListener("click", () => {
  input = "";
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch (error) {
    display.value = "Error";
    input = "";
  }
});
