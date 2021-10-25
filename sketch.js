
const IMG_WIDTH = 750;
const distanceFactor = 1.75;
let Y_POS, X_POS, PARALLAX_START, PARALLAX_END;
let parallaxParams = [distanceFactor];
let layers = [];
const layerFiles = [
  '/img/01-nose-grove_0000s_0004_back.png',
  '/img/01-nose-grove_0000s_0003_mid-3.png',
  '/img/01-nose-grove_0000s_0002_mid-2.png',
  '/img/01-nose-grove_0000s_0001_mid-1.png',
  '/img/01-nose-grove_0000s_0000_front.png'
];


function preload() {
  for (let i=0; i<5; i++) {
    layers.push(loadImage(layerFiles[i]));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  calculateParallaxParams();
}

function draw() {
  setPositionParams();
  background(255);
  for (let i=0; i<5; i++){
    drawImage(layers[i], -parallaxParams[i], parallaxParams[i]);
  }
}

function calculateParallaxParams() {
  for (let i=1; i<5; i++) {
    // layers increased parallax effect exponentially
    // e.g. position delta increases by 2, 4, 8, 16, ...
    parallaxParams.push(pow(distanceFactor, i+1));
  }
}

function setPositionParams(){
  Y_POS = windowHeight / 2; 
  X_POS = windowWidth / 2;
  PARALLAX_START = X_POS - IMG_WIDTH / 2;
  PARALLAX_END = X_POS + IMG_WIDTH / 2;
}

function drawImage(img, pmin, pmax) {
  let mouseXPos = min(max(mouseX, PARALLAX_START), PARALLAX_END);
  let pos = lerp(pmin, pmax, mouseXPos / PARALLAX_END);
  let img_height = img.height * IMG_WIDTH / img.width;
  image(img, X_POS + pos, Y_POS, IMG_WIDTH, img_height);
}