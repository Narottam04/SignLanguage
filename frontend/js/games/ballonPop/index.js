// initialize kaboom context
kaboom({
  background: [255, 255, 255]
});

// load a sprite "bean" from an image
loadSprite("bean", "https://img.icons8.com/color/48/null/heart-balloon--v1.png");

// define some game variable
let SPEED = 2;
let SCORE = 0;

setInterval(() => {
  for (let int = 0; int < 4; int++) {
    let x = rand(0, width());
    let y = height();
    let randomNum = Math.floor(rand(0, 10));
    let balloon = add([
      // sprite("bean"),
      text(`${randomNum}`),
      pos(x, y),
      area(),
      // scale(1.5),
      color(0, 0, 255),
      `${randomNum}`
    ]);

    balloon.onUpdate(() => {
      balloon.moveTo(balloon.pos.x, balloon.pos.y - SPEED);
    });
  }
}, 4000);
