// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

let video;
var overlayAlpha = 200;
var imgCount = 0;
var count = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  // Create a video capture object
  video = createCapture(VIDEO);
  video.size(80, 60); // Set the size of the video frame
  video.hide(); // Hide the captured video
}

function draw() {
  // Display the video frame as a stamp at the mouse position
  //var x = floor(random(100));
  //console.log(x);
  
  /*
  if((x % 2) == 0){
    console.log("Goes in");
     background(100);
  }else{
    //console.log("Doesnt go in");
  }
  */
  if(imgCount >= count){
    background(100);
    imgCount = 0;
  }
  
  if(mouseIsPressed){
    count++;
    console.log(count);
  }else{
    count =  10;
  }
 
  
  image(video, mouseX - 40, mouseY - 30, mouseX, mouseY);
  imgCount++;
}


