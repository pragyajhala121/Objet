objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
    img = loadImage("lock.jpg");
}
function setup(){
    canvas = createCanvas(640,540);
    canvas.center();
}

function draw(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    if (status != "") {
  	  image(img, 0, 0, 640, 540);
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}


function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}
  
  

        