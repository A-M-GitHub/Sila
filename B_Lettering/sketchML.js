// Video
let video;
let angle = 0;
// Classifier Variable
let classifier;
var fillR = 0;
var fillG = 0;
var fillB = 0;

var coincount = parseInt(localStorage.getItem("coincount"));
var lifecount = parseInt(localStorage.getItem("lifecount"));
document.getElementById("coincount").innerHTML = coincount;
document.getElementById("lifecount").innerHTML = lifecount;

var username = localStorage.getItem("username").toUpperCase();
const request = username.split("");

request.forEach((letter, id) => {
  $(`<div class='letters' id='letter${id}'>${letter}</div>`).appendTo(
    "#showUsername"
  );
});

var res = [];
var act = 0;
var error = 0;

function preload() {
  classifier = ml5.imageClassifier("./lib/model.json");
}

// To store the classification
let label = "waiting...";
// var label;
let confidence = 0;
// Load the model first

function setup() {
  console.log(request);

  var canvas = createCanvas(800, 500);

  canvas.parent('canvas-frame');

  // Create the video
  video = createCapture(VIDEO);
  // video.size(320, 240);
  video.hide();
  // flippedVideo = ml5.flipImage(video);

  // Start classifying
  classifyVideo();
}
// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}

function draw() {
  background(255);

  image(video, 0, -50, 1180, 880);

<<<<<<< HEAD
  // Draw recognized text
  fill(229, 231, 250,0);
  drawLabel();

  // Draw the label
  fill(229, 231, 250,0);
=======
  //draw lable confidence bar
  noStroke();
  fill(200, 200, 200);
  rect(10, 10, 350, 10);

  noStroke();
  fill(0);
  var w = confidence * 350;
  rect(10, 10, w, 10);

  //Draw recognized text
  fill(0, 255, 0,0);
  drawLabel();

  // Draw the label
  fill(255, 0, 0,0);
>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 100);
}

function drawLabel() {
  // Draw the Letters/results 

<<<<<<< HEAD
  if (confidence > 0.9) {
=======
  if (confidence > 0.5) {
>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481
    if (label != res[res.length - 1]) {
      //nicht das letzte
      var animLetter = document.getElementById(`letter${act}`);
      if (label == request[act]) {
        //wenn Label gleich ist mit request dann act
<<<<<<< HEAD
        erroe = 0;
=======
        
>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481

        console.log(animLetter);
        var tl = gsap.timeline();
        tl.to(animLetter, { duration: 1, y: -20 });
        tl.to(animLetter, { duration: 1, y: 0 });
        document.getElementById(`letter${act}`).style.color = "#00C472";
        
        act++; //nächster Buchstabe
        console.log(label);
      }
      else if (label != request[act] && label != "trash") {
<<<<<<< HEAD
        error++
      if (error == 2){ //Eingebaut damit man nicht sofort stirbt! - last minute action
=======
>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481
      lifecount = lifecount - 1;
      console.log(lifecount);
      localStorage.setItem("lifecount", lifecount);
      document.getElementById("lifecount").innerHTML = lifecount;
<<<<<<< HEAD
        var tl = gsap.timeline();
        tl.to(animLetter, {duration: 1, rotation: 50 });
        tl.to(animLetter, {duration: 1, rotation: 0 }); //annimiere Buchstaben wenn nicht erkannt
        var animlife = document.getElementById('Icon4');
=======

       var tl = gsap.timeline();
        tl.to(animLetter, {duration: 1, y: 20 });
        tl.to(animLetter, { duration: 1, y: 0 });
        // tl.to(animLetter, {duration: 1, rotation: 0 }); //annimiere Buchstaben wenn nicht erkannt
       var animlife = document.getElementById('Icon4');
>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481
        console.log(animlife);
        var tl = gsap.timeline();
        tl.to(animlife, {duration: 1, y: -20, opacity: 0 });
        tl.to(animlife, {duration: 1, y: 0, opacity: 0 });
        tl.to(animlife, {duration: 1, y: 0, opacity: 1 });
        document.getElementById(`letter${act}`).style.color = "#FF647C";
        
      }
      if (lifecount <= 0){
        window.location.replace("../E_fail/fail.html");
      }
      }
    }
    document.getElementById("WeiterB").disabled = false;
    res.push(label);
  }
}
<<<<<<< HEAD
=======

>>>>>>> 526b2ead7e56f80caca9479270fdc19806f37481
res.forEach((textX, idx) => {
  text(textX, 20 * idx + 30, height - 16);
});

// When we get a result (first error then resulots)
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
  confidence = results[0].confidence;
  // Classifiy again!
  classifyVideo();
}

var usedJoker = false;

function Joker() {
  if (!usedJoker && coincount > 0) {
    coincount = coincount - 50;
    console.log(coincount);
    localStorage.setItem("coincount", coincount);
    document.getElementById("coincount").innerHTML = coincount;
    var animlife = document.getElementById('Icon1');
        console.log(animlife);
        var tl = gsap.timeline();
        tl.to(animlife, {duration: 1, y: -20, opacity: 0 });
        tl.to(animlife, {duration: 1, y: 0, opacity: 0 });
        tl.to(animlife, {duration: 1, y: 0, opacity: 1 });
    jokerimg.forEach((letterimg) => {
      if (request[act] == letterimg.letter) {
        document.getElementById("joker-img").src = letterimg.src;
      }
    });
    usedJoker = true;
  } else if (coincount == 0) {
    document.getElementById("joker-img").src = "./lib/Jockerimg/joker-down.png";
  }
  
}

$("#jokerModal").on("hidden.bs.modal", function (e) {
  document.getElementById("joker-img").src = "./lib/Jockerimg/Jocker.png";
  usedJoker = false;
});
