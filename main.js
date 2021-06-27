objectDetector = "";
status = "";
value = "";
function setup() {
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(380, 380);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function start() {
value = document.getElementById("input").value;
console.log("Value of input box = " + value);
}
function draw() {
image(video, 0, 0, 380, 380);
}
function modelLoaded() {
console.log("Model Loaded!");
status = true;
}