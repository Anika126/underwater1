var splashscreen;
var about
var play




function preload() {
splashscreen = loadImage("underwater shooter.gif"); 
}

function setup(){
playbutton = createImg("play.png")
aboutbutton = createImg("about.jpg")
playbutton.position(400,400);
playbutton.size(100,100)
playbutton.hide();
aboutbutton.position(50,250);
aboutbutton.size(100,100)
aboutbutton.hide();
}

function draw(){
    background(splashscreen)
playbutton.mousePressed(()=>{
playbutton.hide();
aboutbutton.hide();
gamestate="play"






})
aboutbutton.mousePressed(()=>{
aboutbutton.hide();
playbutton.hide();
gamestate="about"



})
if (gamestate="about"){
    aboutgame()
}



}
function aboutgame(){}