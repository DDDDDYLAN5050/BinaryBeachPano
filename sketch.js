var imgArchive = [];
var n = 0;
var bgimg;
let cam;
var textureSand;
let text, textureText;

function preload() {
  for (i = 0; i < 33; i++) {
    var img = loadImage("./assets/sand" + i + ".jpg");
    imgArchive.push(img);
  }

  bgimg = loadImage("./assets/beach6.jpg");
  text = loadStrings("assets/text.txt");
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function touchEnded(event) {
//   DeviceOrientationEvent.requestPermission()
// }

function touchMoved() {
  return false; //CANVAS NO MOVING
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  perspective(PI / 3, width / height, 0.01, 50000);
  angleMode(DEGREES);


  textureText = createGraphics(2000, 600);
  // textureText.background(255);
  textureText.rotate(PI/2);
  textureText.translate(0,-800);
  textureText.fill(color(20,60,90));
  // textureText.textFont('Helvetica');
  textureText.textStyle(BOLD);
  textureText.textSize(18);
  textureText.stroke(128);
  // textureText.resize(2000,-600);


  textureSand = createGraphics(10000, 500);
  var sumX = 0;
  for (i = 0; i < imgArchive.length; i++) {
    textureSand.image(imgArchive[i], sumX, textureSand.height / 2);
    sumX += imgArchive[i].width + 10;
  }

  // put setup code here
}

function landscape() {
  if (windowWidth < windowHeight) {
    background(0, 0, 0, 20);
  }
}

function draw() {
  // clear();
  // blendMode(SCREEN);
// cam.setPosition(rotationX,0,0);
  // cam.lookAt(0,0,0);
  orbitControl(-1, -1, 1);
  // image(bgimg, 0, 0, width, height);
  texture(bgimg);
  noStroke();
  sphere(3000);


  // image(textureText,0,0);
  if (frameCount % 200 == 0) {
    // textureText.fill(255);
    // textureText.rect(0, 760-(frameCount / 10) % textureText.width,textureText.width,40);
    textureText.fill(color(20,60,90));
    textureText.text(random(text), 10, 800-(frameCount / 10) % textureText.width);
  }
  push();
    // blendMode(DARKEST);
  // rotateX(frameCount / 5);
  rotateZ(90);
  rotateY(200-frameCount / 50);
  texture(textureText);
  translate(0, 500, 0);
  scale(1,-1,1);
  cylinder(1500, 2400, 24, 1, false, false);
  // blendMode(BLEND);
  pop();

  push();
  rotateY(frameCount / 10);
  texture(textureSand);
  translate(0, 300, 0);
  cylinder(1200, 500, 24, 1, false, false);
  pop();


  // landscape();
}
