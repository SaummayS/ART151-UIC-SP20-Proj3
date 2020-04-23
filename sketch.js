let intro;
let ready;
let learn;
let fan;
let thorn;

let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let story2 = "";
//let hasBeg = false;

//
// preload():
// To preload images for use in the sketch
//
function preload() {

  intro = loadImage('01-whisker.png');
  ready = loadImage('01-whisk.gif');
  learn = loadImage('dough.gif');
  fan = loadImage('res-fan.gif');
  thorn = loadImage('thorn.gif');

}//end function preload()

//
// setup():
//
function setup() {
  createCanvas(1024, 768);
  textFont("Helvetica");
  textSize(22);

}//end function setup()

//
// draw():
//
function draw() 
{
    background(255);
    fill(0, 102, 153);
    text("WELCOME,WELCOME I SAY!", 0, 50, 200, 200);
    text("SHOULD YOU HAVE SOMETHING TO SAY?", 0, 110, 200, 200);
    text("YES? NO!?", 0, 300, 200, 200);

    if (state == nextState) {

        if (state == 0) {
          image(intro, 350, 50);
        } 

        else if (state == 1) {
          image(ready, 350, 50);
        } 

        else if (state == 2) {
          image(learn, 350, 50);
        } 

        else if (state == 3) {
          image(fan, 350, 50);
        }
        else if (state == 4) {
          
          background(0);
          image(thorn, 350, 50);
        }

    }// end outer if
     
    else {

        counter++;

        if (counter == 30) {
          state = nextState;
          counter = 0;
        }

        let a = map(counter, 0, 30, 0, 255);
        tint(255, a);

        if (nextState == 0) {
          image(intro, 200, 0);
        } 

        else if (nextState == 1) {
          image(ready, 200, 0);
        } 

        else if (nextState == 2) {
          image(learn, 200, 0);
        } 

        else if (nextState == 3) {
          image(fan, 200, 0);
        }
      
        else if (nextState == 4) {
          image(thorn, 200, 0);
        }

        tint(255, 255 - a);

        if (state == 0) {
          image(intro, 200, 0);
        } 

        else if (state == 1) {
          image(ready, 200, 0);
        } 

        else if (state == 2) {
          image(learn, 200, 0);
        } 

        else if (state == 3) {
          image(fan, 200, 0);
        }
        else if (nextState == 4) {
          
          background(0);
          image(thorn, 200, 0);
        }

    }//end outer else

    text(typed, 0, 550, width, 30);

    text(story, 0, 500, width, 30);
  
    text(story2, 0, 520, width, 30);

}//end function draw()

//
// keyPressed():
//
function keyPressed() {

  if (keyCode == BACKSPACE) {
    typed = '';
  }

}//end function keyPressed()

//
// keyTyped():
//
function keyTyped() {

  if (key == '0') {
    nextState = 0;
  } 

  else if (key == '1') {
    nextState = 1;
  } 

  else if (key == '2') {
    nextState = 2;
  } 

  else if (key == '3') {
    nextState = 3;

  } 
  else if (key == '4') {
    nextState = 4;}

  else if (keyCode == RETURN) {

      if (typed == 'ready') {

            typed = '';
            nextState = 1;
            story = "ready you are. begging me to go far?"
            story2 = ""

      } 
    
      else if (typed == 'learn') {

            typed = '';
            nextState = 2;
            story = "When you learn, I'm done !"
            story2 = "Beware and make your run !"

      } 
    
      else if (typed == 'rescue'||typed == 'beg') {

        nextState = 3;
        typed = '';
        story = "You scared just for the whisk, didn't even plan the risk."
        story2 = "begging my pardon, you're just in a wrong twist."

      } 

      else if (typed == 'yes') {

        nextState = 0;
        typed = '';
        story = "yes is for those,"
        story2 = "daring they are for sure ! They seem to be ready I aint steady."

      } 
    else if (typed == 'no') {

        nextState = 0;
        typed = '';

        story = "no is so low,learn how to knead the dough!"
        story2 = "start new, learn new, I'm here to rescue !"

      } 
    else if (typed == 'back') {
      nextState = nextState - 1;
    }
    
    else if (typed == 'run'){
      
      
      nextState = 4;
      typed = '';
      
      story = "run is not fun, its already my turn!"
      story2 = "none of your concern, well it's damaging the world!"
    }


  }//end outer else if for return

   else {
    typed += key;
  }

} //end function keyTyped()
