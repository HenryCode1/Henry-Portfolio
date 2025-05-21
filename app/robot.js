const cax = document.getElementById("canvas");
const pencil = cax.getContext("2d")
const width = cax.width = 300;
const height = cax.height = 300;
//cax.style.background="black"


const boxW = 512;
const boxH = 512;






const imgstwo = 'asset/img/redorobot.png';
const jumpImg = new Image();





class Robot {

  constructor({position,velocity}) {
    this.position=position;
    this.velocity=velocity;
    this.img = new Image();
    this.img.src = imgstwo;
  
        }

  draw() {

       this.update();
       
 
      pencil.drawImage(this.img, Math.floor(this.velocity.frame) * this.position.w, 0, boxW, boxH, this.position.x, this.position.y, this.position.w , this.position.h);
  
  }

  update() {
 
    this.velocity.frame += 0.01;
    if (this.velocity.frame >= this.velocity.frames) {
      this.velocity.frame = this.velocity.frame % this.velocity.frames;
    }

 
  }

}



  const robot=new Robot({

    position:{
      x:300/2 -boxW/2,
      y:300/2 - boxH/2,
      w:boxW,
      h:boxH
  
    },

    velocity:{

      frame:0,
      frames:3,
   
    }

  });






function update() {

  pencil.clearRect(0, 0, width, height);


  robot.draw();

 
  requestAnimationFrame(update);
}
update();