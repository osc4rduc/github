let posx;
let posy;
let diam;
let rad;

let velx;
let vely
let colorr

function setup(){
    createCanvas(windowWidth, windowHeight);
    diam = random(50,300); 
    rad = diam/2

    posx = random (rad,width-rad );
    posy = random (rad,height-rad);

    velx = random( -5, 5); 
    vely = random(-5,5);
    
}
function draw(){
    background(120)
    posx += velx;
    posy += vely;

    if(posx > width - rad || posx < rad){
        velx *= -1;
    }

    if(posy > height - rad || posy < rad){
        vely *= -1;
    }

    circle(posx, posy, diam);
    fill = random (255,0,0);

    
}