console.log("test");

function changeFontSize() {
  let userInput = document.getElementById("inputText").value;
  let a = document.getElementById("myRange").value;
  let font = document.getElementById("fonts").value;
  document.getElementById("output").innerHTML = userInput;

  let output = document.getElementById("output");

  output.style.fontFamily = font;
  output.style.fontSize = a + "px";
}
