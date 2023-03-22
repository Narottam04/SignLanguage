const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;
let lives = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;

    ctx.fillText(this.text, this.xpos, this.ypos);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Aerial";

    ctx.lineWidth = 5;
    ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.draw(ctx);

    if (this.xpos + this.radius > window.innerWidth) {
      this.dx = -this.dx;
    }

    if (this.xpos + this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.ypos + this.radius > window.innerHeight) {
      this.dy = -this.dy;
    }

    if (this.ypos + this.radius < 0) {
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let allCircles = [];

let createCircle = function (circle) {
  circle.draw(ctx);
};

// for (let numbers = 0; numbers < 1; numbers++) {
//   let randomX = Math.random() * window.innerWidth;
//   let randomY = Math.random() * window.innerHeight;

//   let circle1 = new Circle(randomX, randomY, 50, "red", 2);
//   allCircles.push(circle1);

//   createCircle(allCircles[numbers]);
// }

// let circle2 = new Circle(200, 200, 50, "red");
// circle2.draw(ctx);

let randomX = Math.random() * window.innerWidth;
let randomY = Math.random() * window.innerHeight;

let circle1 = new Circle(randomX, randomY, 50, "red", 1, 8);

circle1.draw(ctx);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  circle1.update();
};

updateCircle(ctx);
