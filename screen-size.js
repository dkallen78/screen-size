//Where the dimensions of the screen will be output
const output = document.getElementById("output");
//The div that will show the physical size of the screen
const sizeBox = document.getElementById("sizeBox");
//The button that triggers the calculation
const button = document.getElementById("button");
//Actions taken when the button is clicked
button.addEventListener("click", (event) => {
  //Gets the diagonal and vertical and horizontal resolution
  const diagonal = parseFloat(document.getElementById("diagonal").value);
  const height = parseFloat(document.getElementById("height").value);
  const width = parseFloat(document.getElementById("width").value);
  //Calculates the aspect ratio
  const ratio = width / height;
  //Calculates the height with a modified Pythagorean theorum
  //a² + b² = c² 
  //height² + width² = diagonal²
  //height² + (height * ratio)² = diagonal²
  //height² + (height² * ratio²) = diagonal²
  //height² * (ratio² + 1) = diagonal²
  //height² = diagonal² / (ratio² + 1)
  //height = √(diagonal² / (ratio² + 1))
  const heightInch = Math.sqrt(diagonal**2 / ((ratio**2) + 1));
  const widthInch = heightInch * ratio;

  output.innerHTML = `${heightInch.toPrecision(3)} by ${widthInch.toPrecision(3)} inches<br>
                      ${Math.round(heightInch * 25.4).toPrecision(3)} by ${Math.round(widthInch * 25.4).toPrecision(3)} mm`;
  //Determines the ratio of device pixels per inch to 96 ppi
  const scale = window.devicePixelRatio;
  //resizes the sizeBox div to be the approximate size  of the screen
  sizeBox.style.width = `${widthInch * scale}in`;
  sizeBox.style.height = `${heightInch * scale}in`;
  sizeBox.style.border = "1px solid black";

});