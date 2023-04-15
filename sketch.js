function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let zombies = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 15; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background(102, 0, 51);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  
  }
  
  tampil(){
    //gambar sebelum
  //warna putih
  ellipse(this.location.x,this.location.y)

  //gambar telinga
  ellipse (this.location.x,this.location.y,10,10)
  ellipse (this.location.x,this.location.y,40,15)

  //gambar mata 
  ellipse(this.location.x,this.location.y,9,25)
  ellipse(this.location.x,this.location.y,4,15)
  ellipse(this.location.x,this.location.y,15,35)
  ellipse(this.location.x,this.location.y,4,15)

  //gambar hidung
  ellipse (this.location.x,this.location.y,10,8)
  line(this.location.x,this.location.y)

  //gambar mulut
  ellipse(this.location.x,this.location.y,3,7)
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 6;
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}