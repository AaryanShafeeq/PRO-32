class Blowermouth {
    constructor(x, y, w, h) {
        let options = {
            isStatic: true
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
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}