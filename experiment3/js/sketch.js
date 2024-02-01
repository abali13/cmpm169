// sketch.js - Experiment 3
// Author: Aditya Bali
// Date: 1/29/24

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


/**
 * noise values (noise 3d) are used to animate a bunch of agents.
 *
 * KEYS
 * 1-2                 : switch noise mode
 * space               : new noise seed
 * c                   : change color
 * backspace           : clear screen
 * s                   : save png
 */
'use strict';
var c;
function setup(){
    let canvasContainer = select("#canvas-container");
    let canvas = createCanvas(470, 600);     
    canvas.parent(canvasContainer);     
    background(0, 0, 0);
   c = color(150, 180, 195);
  
}

var sketch = function(p) {

  var agents = [];
  var agentCount = 3000;
  var noiseScale = 200;
  var noiseStrength = 10;
  var noiseZRange = 0.4;
  var noiseZVelocity = 0.01;
  var overlayAlpha = 200;
  var agentAlpha = 90;
  var strokeWidth = 0.3;
  var drawMode = 1;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
    }
  };

  p.draw = function() {
    p.fill(255, overlayAlpha);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);
    
    
     if (p.key == 'c'){
       c = color(random(255), random(255), random(255), random(255));
      //drawMode = 1;
      //p.stroke(c, agentAlpha);
       //c = color(noiseScale, noiseStrength, noiseZVelocity);
       //c = noise(noiseScale, );
    } 
     // line
    p.stroke(0,130,164);
    p.noFill();

    var noiseXRange = p.mouseX / 10;
    //console.log('noiseXRange: 0 - ' + noiseXRange);

    p.beginShape();
    p.stroke(c, agentAlpha);
    //strokeWeight(100);
    for (var x = 0; x < p.width; x += 10) {
      var noiseX = p.map(x, 0, p.width, 0, noiseXRange);
      var y = p.noise(noiseX) * p.height;
      p.vertex(x,y); 
      //p.vertex(strokeWidth, noiseScale);
    };
    p.endShape();

    // Draw agents
    p.stroke(c, agentAlpha);
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) {
        //agents[i].update1(noiseXRange, p.mouseY, noiseStrength, noiseZVelocity);
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      } else {
        agents[i].update2(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      }
    }
  };

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == '3') drawMode = 30;
    if (p.key == ' ') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed);
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
  };
 12
};

var myp5 = new p5(sketch);
