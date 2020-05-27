var imgArchive = [];
var n = 0;
var bgimg = [];
let cam;
var textureSand;
let text, textureText;

function preload() {
  for (i = 0; i < 33; i++) {
    var img = loadImage("./assets/sand" + i + ".jpg");
    imgArchive.push(img);
    if (i < 7) {
      var bg = loadImage("./assets/beach" + i + ".jpg");
      bgimg.push(bg);
    }
  }

  // bgimg = loadImage("./assets/beach6.jpg");
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
  setAttributes('antialias', true);
  createCanvas(windowWidth / 1.01, windowHeight / 1.01, WEBGL);
  cam = createCamera();
  perspective(PI / 3, width / height, 0.01, 50000);
  angleMode(DEGREES);
  fill(color(204, 204, 153));

  textureText = createGraphics(2000, 600);
  // textureText.background(255);
  textureText.rotate(PI / 2);
  textureText.translate(0, -800);
  textureText.fill(color(51, 102, 102));
  // textureText.textFont('Helvetica');
  textureText.textStyle(BOLD);
  textureText.textSize(18);
  textureText.stroke(color(204, 204, 153));
  textureText.strokeWeight(2);
  // textureText.resize(2000,-600);


  textureSand = createGraphics(6000, 300);
  var sumX = 0;
  for (i = 0; i < imgArchive.length; i++) {
    textureSand.image(imgArchive[i], sumX, textureSand.height / 2,imgArchive[i].width/2,imgArchive[i].height/2);
    sumX += imgArchive[i].width/2 + 5;
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
  if (frameCount % 600 == 0) {
    texture(bgimg[int(random(0, 7))]);
  }
  noStroke();
  push();
  rotateY(frameCount / -100);
  sphere(3000);
  pop();

  push();
  rotateY(frameCount / 20);
  texture(textureSand);
  translate(0, 200, 0);
  cylinder(2500, 1000, 24, 1, false, false);
  pop();
  // image(textureText,0,0);
  if (frameCount % 250 == 0) {
      if (frameCount % 20000 == 0) {
        textureText.clear();
      }
    // textureText.fill(255);
    // textureText.rect(0, 760-(frameCount / 10) % textureText.width,textureText.width,40);
    textureText.fill(color(20, 60, 90));
    textureText.text(random(text), 10, 800 - (frameCount / 10) % textureText.width);
  }
  push();
  // blendMode(DARKEST);
  // rotateX(frameCount / 5);
  rotateZ(90);
  rotateY(200 - frameCount / 54);
  texture(textureText);
  translate(0, 500, 0);
  scale(1, -1, 1);
  cylinder(1500, 2400, 24, 1, false, false);
  // blendMode(BLEND);
  pop();




  // landscape();
}
