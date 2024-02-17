let input = document.getElementById("input-el");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    } else if (buttonText === "AC") {
      string = "";
      input.value = string;
    } else if (buttonText === "CE") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (buttonText === "x") {
      if (string.length === 0 || isOperator(string[string.length - 1])) {
      } else {
        string += "*";
        input.value = string;
      }
    } else if (isOperator(buttonText)) {
      if (string.length === 0 || isOperator(string[string.length - 1])) {
      } else {
        string += buttonText;
        input.value = string;
      }
    } else if (buttonText === "%") {
      if (string.length === 0 || isOperator(string[string.length - 1])) {
      } else {
        string += "%";
        input.value = string;
      }
    } else if (buttonText === ".") {
      if (
        string.length === 0 ||
        isOperator(string[string.length - 1]) ||
        string.endsWith(".")
      ) {
      } else {
        string += ".";
        input.value = string;
      }
    } else {
      string += buttonText;
      input.value = string;
    }

    input.scrollLeft = input.scrollWidth;
  });
});

function isOperator(char) {
  return ["+", "-", "*", "/", "%"].includes(char);
}
