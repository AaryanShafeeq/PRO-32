let ball, blower, blowermouth

function setup() {
  createCanvas(800, 400);

  engine = Matter.Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowermouth = new Blowermouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createButton("Click To Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255, 255, 255);
  Matter.Engine.update(engine);

  ball.display();
  blower.display();
  blowermouth.display();
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}