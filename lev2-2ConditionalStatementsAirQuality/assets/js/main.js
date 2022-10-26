var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

//---------------------------------------------

function checkAirQuality() {
  const value = document.getElementById("myRange").value;
  const bodyColor = document.querySelector("body");

  if (value <= 50) {
    bodyColor.style.backgroundColor = "green";
    document.getElementById("first").innerHTML =
      "Level of health concern: Good";
    document.getElementById("second").innerHTML =
      "Level of health effect: Little or no risk";
  } else if (value > 50 && value <= 100) {
    bodyColor.style.backgroundColor = "yellow";
    document.getElementById("first").innerHTML =
      "Level of health concern: Moderate";
    document.getElementById("second").innerHTML =
      "Level of health effect: Acceptable quality";
  } else {
    bodyColor.style.backgroundColor = "orange";
    document.getElementById("first").innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    document.getElementById("second").innerHTML =
      "Level of health effect: Generable publics not likely affected";
  }
  document.body.style.backgroundColor = bodyColor;
}
