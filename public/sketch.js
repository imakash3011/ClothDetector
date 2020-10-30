// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/l4kaUxe-x/model.json';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// To store img
let img;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
  img = loadImage('iphone.png');
}

function setup() {
  createCanvas(760, 620);
  // Create the video
  video = createCapture(VIDEO);
  video.size(273, 540, 40, 40);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background('rgb(214,228,255)');
  // Draw the video
  image(flippedVideo, 80, 45);
  // mobile
  image(img, 5, 35, 420, 580);

  // Draw the label
  noStroke();
  fill('white');
  rect(600, 250, 140, 120, 16);

  noStroke();
  fill('rgb(255,241,214)');
  rect(604, 254, 132, 112, 14);

  fill('rgb(34, 25, 54)')
  textSize(24);
  textFont('Roboto');
  textAlign(CENTER);
  text(label, width - 90, height - 300);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}