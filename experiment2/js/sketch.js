// sketch.js - purpose and description here
// Author: Aditya Bali
// Date: 1/22/24

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
/*
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    var centerHorz = canvasContainer.width() / 2 - 125;
    var centerVert = canvasContainer.height() / 2 - 125;
    fill(234, 31, 81);
    noStroke();
    rect(centerHorz, centerVert, 250, 250);
    fill(255);
    textStyle(BOLD);
    textSize(140);
    text("p5*", centerHorz + 10, centerVert + 200);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}
*/
'use strict';
var c;

function setup() {
  createCanvas(720, 720);
  noFill();
  background(255);
  strokeWeight(2);
  //stroke(0, 25);
  c = color(150, 180, 95);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);

    var circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2;
    var angle = TAU / circleResolution;
    if (key == ' ') c = color(random(255), random(255), random(255), random(255));

    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      //var x = ((sin(angle * i) * radius)/ (cos(angle * i) * radius));
      //var y = ((cos(angle * i) * radius)/ (sin(angle * i) * radius));
      if(circleResolution % 2 == 0){
        vertex(x, y);
      }else{
        vertex(y, x);
      }
      
      tint(c);
      stroke(c);
    }
    endShape();

    pop();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
