function setup() {
    createCanvas(700, 700);
    background("#00BCD4");
  }
  
  function draw() {
    stroke("rgb(18,18,19)");
    fill("rgb(247,242,242)");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed){
    rect (mouseX,mouseY,30,45);
    }
     }