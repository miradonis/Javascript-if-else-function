console.log("test");

let winner = "";

if (170 + 22 * 5 > 168 + 34 * 5) {
  winner = "John hat gewonnen";
} else if (170 + 22 * 5 == 168 + 34 * 5) {
  winner = "Gleichstand";
} else {
  winner = "Meike hat gewonnen";
}

document.getElementById("winner").innerHTML = winner;
