var ship
var bullets = []
var asteroids = []
var s = 'Seconds Alive:'

function setup() {
  createCanvas(windowWidth / 2.5, windowHeight / 2.5);
  // cnv.parent('canvasholder')
  ship = new Ship(width / 2, height / 2)
  for (var i = 0; i < 4; i++) {
    asteroids.push(new Asteroid(random(width), random(height), random(25, 100)))
  }
}

function draw() {
  background(0);
  renderBullets();
  ship.render();
  if (frameCount % 150 == 0) {
    asteroids.push(new Asteroid(random(width), 0, random(25, 100)))
  }
  renderAsteroids();
  if (keyIsDown(RIGHT_ARROW)) {
    ship.r = ship.r + 0.05
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.r = ship.r - 0.05
  }
  if (keyIsDown(UP_ARROW)) {
    if (ship.s < 4) {
      ship.s = ship.s + 0.25
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (ship.s >= 1) {
      ship.s = ship.s - 0.05
    }
  }
  textAlign(CENTER)
  fill(255)
  text(s + int(frameCount / 60), width / 2, 15)
}

function windowResized() {
  resizeCanvas(windowWidth / 2.5, windowWidth / 2.5);
}

function renderBullets() {
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].display();
    bullets[i].update();
    for (var l = asteroids.length - 1; l >= 0; l--) {
      if (bullets[i].collide(asteroids[l])) {
        var newAsteroids = asteroids[l].break();
        asteroids = asteroids.concat(newAsteroids)
        asteroids.splice(l, 1)
        bullets[i].x = -100
      }
    }
    if (bullets[i].y < 0 || bullets[i].y > height || bullets[i].x < 0 || bullets[i] > width) {
      bullets.splice(i, 1)
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    bullets.push(new Bullet(ship.x, ship.y, 5, ship.r))
  }
}

function renderAsteroids() {
  for (var j = 0; j < asteroids.length; j++) {
    asteroids[j].display();
    asteroids[j].update();
    if (ship.hits(asteroids[j])) {
      print(s + int(frameCount / 60))
    }
  }
}