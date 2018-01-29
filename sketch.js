
  function setup() {
    createCanvas(800,800);
    
  }
  
  function draw() {
    background(0);
    //body
    beginShape();
    translate(mouseX, mouseY);
    rotate(PI/1.0);
    //translate(x,y);
    strokeWeight(1);
    stroke(0)
    fill(161, 123, 198)
    arc(300,450, 170, 170, 0, PI + QUARTER_PI, CHORD)
    
    //tenticles
    noFill();
    strokeWeight(2);
    stroke(24, 10, 38)
    bezier(300, 415, 350, 200, 200, 250, 120, 88)
    bezier(350, 435, 360, 230, 150, 250, 150, 60)
    bezier(275, 406, 320, 250, 150, 250, 240, 80)
    bezier(250, 395, 320, 200, 100, 230, 200, 70)
    bezier(380, 447, 400, 190, 170, 200, 290, 70)
    bezier(360, 440, 450, 140, 90, 220, 100, 130)
    stroke(24, 10, 38);
    strokeWeight(4);
    line(300,418,275,450);
    line(320,425,297,455);
    endShape();

  }