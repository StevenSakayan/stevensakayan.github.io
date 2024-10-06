const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#72ffbf";

class Particle {
    constructor(part_count) {
        this.part_count = part_count;
        this.xx = -5;
        this.yy = 0;
        this.rand = Math.random()+0.5;
        this.amp = this.rand*40;
        this.trans = Math.random();
    }
    draw(c) {
        c.fillStyle = `rgb(255 255 255 / ${(this.trans)})`;
        c.fillRect(this.xx,this.yy,4,4);
    }
    step() {
        this.draw(c);
        this.xx += 0.4;
        this.yy = (Math.sin((this.xx+(this.rand*100)-runtime)/100)*this.amp)+window_height/2;
        if (this.xx > window_width) {
            this.xx = 0;
            generating = false;
        }
    }
}


var create_timer = 0;
const timer_limit = 2;
var part_count = 0;
var generating = true;
var particles = new Array(0);
var runtime = 0;

function updateCanvas() {
    create_timer++;
    runtime += 0.8;
    if (generating) {
        if (create_timer >= timer_limit) {
            create_timer = 0;
            part_count++;
            particles[part_count] = new Particle(part_count);
        }
    }
    requestAnimationFrame(updateCanvas);
    c.clearRect(0,0,window_width,window_height);
    
    for(var i = 1; i <= part_count; i++) {
        particles[i].step(c);
    }
}
updateCanvas();