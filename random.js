function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  //circle(mouseX,mouseY,10)
  let num = 300;
while (num > 0) {
  num = num - 1;
    rectMode(CENTER)

  drawCirc(random(500), random(500), random(255), random(255))
}

}

function drawCirc(circleX, circleY, r, g) {
  fill(r, g, mouseY, round(random(mouseX)))
  circle(circleX,circleY, 20);
}
