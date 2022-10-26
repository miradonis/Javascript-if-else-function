console.log("test");

function calculateDifference() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);

  if (inputNumber >= 0 && inputNumber <= 27) {
    document.getElementById("result").innerHTML =
      "Der Unterschied beträgt: " + (27 - inputNumber);
  } else if (inputNumber > 27) {
    document.getElementById("result").innerHTML =
      "Dein verdoppeltes Ergebniss: " + inputNumber * 2;
  } else {
    document.getElementById("result").innerHTML = "Das war wohl nüscht!";
  }
}
