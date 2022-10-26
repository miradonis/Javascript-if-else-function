console.log("test");

function weather() {
  const inputValue = parseInt(document.getElementById("inputValue").value);

  if (inputValue >= 8 && inputValue <= 10) {
    console.log("Super");
  } else if (inputValue >= 6 && inputValue <= 7) {
    console.log("Gut");
  } else if (inputValue >= 3 && inputValue <= 5) {
    console.log("Okay");
  } else if (inputValue >= 0 && inputValue <= 2) {
    console.log("Schlecht");
  } else {
    console.log("Falsche Eingabe");
  }
}
