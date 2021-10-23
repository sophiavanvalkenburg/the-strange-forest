let frontRow, mid1Row, mid2Row, mid3Row, backRow
let X_SIZE = 1024;
let MIN_X = 150;
let MAX_X = X_SIZE + MIN_X;

let PARALLAX_START = MIN_X;
let PARALLAX_END = MAX_X;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  backRow = createImg('/img/01-nose-grove_0000s_0004_back.png', 'bushes in the background', () => {
    backRow.size(X_SIZE, AUTO);
  });
  backRow.position(MIN_X, 0);

  mid3Row = createImg('/img/01-nose-grove_0000s_0003_mid-3.png', 'tiny noses farther away', () => {
    mid3Row.size(X_SIZE, AUTO);
  });
  mid3Row.position(MIN_X, 0);
  
  mid2Row = createImg('/img/01-nose-grove_0000s_0002_mid-2.png', 'smaller noses farther down the path', () => {
    mid2Row.size(X_SIZE, AUTO);
  });
  mid2Row.position(MIN_X, 0);

  mid1Row = createImg('/img/01-nose-grove_0000s_0001_mid-1.png', 'big noses at the beginning of the path', () => {
    mid1Row.size(X_SIZE, AUTO);
  });
  mid1Row.position(MIN_X, 0);

  frontRow = createImg('/img/01-nose-grove_0000s_0000_front.png', 'grasses in the foreground', () => {
    frontRow.size(X_SIZE, AUTO);
  });
  frontRow.position(MIN_X, 0);

}

function draw() {
  parallax(frontRow, -63, 64);
  parallax(mid1Row, -31, 32);
  parallax(mid2Row, -15, 16);
  parallax(mid3Row, -7, 8);
  parallax(backRow, -3, 4);
}

function parallax(elem, pmin, pmax) {
  let mouseXPos = min(max(mouseX, PARALLAX_START), PARALLAX_END);
  let pos = lerp(pmin, pmax, mouseXPos / PARALLAX_END);
  elem.position(MIN_X + pos);
}