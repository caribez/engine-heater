var minTemp = -15.0;
var maxTemp = 22.5;
var minTime = 0.0;
var maxTime = 1.5;

function lerp_clip(min, max, lerp) {
  if (lerp > 1.0) lerp = 1.0;
  if (lerp < 0.0) lerp = 0.0;
  
  return min * (1.0 - lerp) + max * lerp;
}

function execute() {
  let currentTemp = document.getElementById("input").value;
  
  let lerpValue = (currentTemp - minTemp) / (maxTemp - minTemp);  
  
  document.getElementById("result").innerHTML = "Use the heater approx: " + lerp_clip(maxTime, minTime, lerpValue) * 60 + " minutes";
}
