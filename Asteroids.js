class Asteroid {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = random(-3, 3);
    this.k = random(-3, 3);
  }
  display() {
    push();
    fill(0);
    stroke(255);
    ellipse(this.x, this.y, this.r);
    pop();
  }
  break () {
    var newA = [];
    if (this.r >= 30) {
      newA[0] = new Asteroid(this.x, this.y, this.r * 0.5);
      newA[1] = new Asteroid(this.x, this.y, this.r * 0.5);
    }
    return newA;
  }
  update() {
    this.x = this.x + this.k;
    this.y = this.y + this.h;
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }
}