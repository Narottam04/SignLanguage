const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;
let lives = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50);

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.fill();

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(75, 100);
ctx.lineTo(100, 50);

ctx.moveTo(200, 100);
ctx.arc(200, 100, 30, 0, 300, true);
ctx.stroke();
