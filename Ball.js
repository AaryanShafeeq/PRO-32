class Ball {
    constructor(x, y, w, h) {
        let options = {
            restitution: 0.8,
        }

        this.x = x;
        this.y = y;

        this.w = w;
        this.h = h;

        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        pop();
    }
}