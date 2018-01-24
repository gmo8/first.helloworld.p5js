function setup(){
    createCanvas(800, 800);
}

function draw(){
    fill(255, 200, 200); //comment 
    ellipse(400, 400, 200, 200);

    triangle(50, 80, 55, 30, 100, 60);
    fill(200, 250, 200);

    //background(200);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(40, 70);
    fill(100, 150, 100);

    //background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(100, 50);
    fill(400,350,100);
  }

