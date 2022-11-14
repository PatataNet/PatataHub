noseX=100;
noseY=100;
nosex=100;
nosey=100;

function preload() {
  clown_nose = loadImage('censura.png');
  clown_nose1 = loadImage('cubrebocas.png');
}

function eliminar(){
  clown_nose = loadImage('');
  clown_nose1 = loadImage('');
}

function XD(){
  clown_nose = loadImage('X.png');
  clown_nose1 = loadImage('D.png');
}

function censura(){
    clown_nose = loadImage('censura.png');
}

function shrek(){
    clown_nose = loadImage('shrek.png');
}

function lentes(){
    clown_nose = loadImage('lentes.png');
}

function porro(){
    clown_nose1 = loadImage('cigarro.png');
}

function lentesthug(){
    clown_nose = loadImage('lentesthug.png');
}

function cubrebocas(){
    clown_nose1 = loadImage('cubrebocas.png');
}

function sombraojos(){
    clown_nose = loadImage('sombraojos.png');
}

function sombraboca(){
    clown_nose1 = loadImage('sombraboca.png');
}

function cinta(){
    clown_nose1 = loadImage('cinta.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clown_nose, noseX, noseY, 130, 80);
  image(clown_nose1, nosex, nosey, 130, 140);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-65;
    noseY = results[0].pose.nose.y-67;
    nosex = results[0].pose.nose.x-65;
    nosey = results[0].pose.nose.y-24;
  }
}

function take_snapshot(){    
  save('foto.png');
}
