class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.s = 0;
    this.h = sin(this.r);
    this.k = cos(this.r);
    this.lives = 3;
  }
  render(){
    this.update();
    this.display();
  }
  display() {
      push();
      translate(this.x, this.y);
      rotate(this.r);
      fill(0);
      stroke(255);
      triangle(25, 0, -10, 10, -10, -10);
      pop();
    }
  update() {
    this.h = (sin(this.r)) * this.s;
    this.k = (cos(this.r)) * this.s;
    this.y = this.y + this.h;
    this.x = this.x + this.k;
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
  hits(asteroid) {
    if (dist(this.x, this.y, asteroid.x, asteroid.y) < this.r + asteroid.r) {
      this.lives--;
    } else {
      return false
    }
  }
}