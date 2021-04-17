class Bullet {
  constructor(x, y, d, r) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.h = sin(r)
    this.k = cos(r)
  }
  collide(asteroid) {
    if ((dist(this.x, this.y, asteroid.x, asteroid.y)) < asteroid.r) {
      return true
    } else {
      return false
    }
  }
  update() {
    this.y = this.y + (this.h * 8)
    this.x = this.x + (this.k * 8)
  }
  display() {
    push();
    fill('red');
    ellipse(this.x, this.y, this.d)
    pop();
  }
}