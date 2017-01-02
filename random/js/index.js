function Spot(x, y, r, red, green, blue) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.red = red;
  this.green = green;
  this.blue = blue;
}

var spots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  //noLoop();
}

function draw() {
  background(0);
  var spot = new Spot(random(0, width),
    random(0, height),
    random(15, 35),
    random(100, 255), 0, random(100, 190));

  if (spots.length > 750) {
    spots.splice(0, 1);
    frameRate(3);
  }
  spots.push(spot);

  for (var i = 0; i < spots.length; i++) {
    var s = spots[i];
    stroke(s.red, s.green, spot.blue);
    fill(s.red, s.green, s.blue, 100);
    ellipse(s.x, s.y, s.r, s.r);
  }

  //text(spots.length, 10, 500);

}

function mousePressed() {
  var fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}