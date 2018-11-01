
const rules = {
  'F':'FF+[+F-F-F]-[-F+F+F]'
}

// const commands = {
//   'F': () => { line(0,0,0,-length); translate(0,-length) },
//   '+': () => { rotate(PI/6);  },
//   '-': () => { rotate(-PI/6); },
//   '[': () => { push(); },
//   ']': () => { pop();  }
// }


// Parametros
let length = 1;
let ratio = 0.4;
let angle = 0.436332;
//let step = 1;
//let chains = ['+XF'];

// Reglas
// const rules = {
//   'X':'X+YF+',
//   'Y':'-FX-Y'
// }
// const rules = {
//   'X':'F+[[X]-X]-F[-FX]+X',
//   'F':'FF'
// }


// Comandos
const commands = {
  'F':() => { line(0,0,0, -length * (ratio**ls.step));
              translate(0,-length * (ratio**ls.step)); },
  'G':() => { line(0,0,0, -length * (ratio**ls.step));
              translate(0,-length * (ratio**ls.step)); },
  'M':() => { translate(0,-length * (ratio**ls.step)); },
  'N':() => { translate(0,-length * (ratio**ls.step)); },
  '+':() => { rotate(angle);  },
  '-':() => { rotate(-angle); },
  '[':() => { push(); },
  ']':() => { pop();  },
  'L':() => { ellipse(0,0,-length * (ratio**ls.step)/2,-length * (ratio**ls.step));  }
}


const ls = new LSystem(commands);
ls.axiom = 'F';
ls.rules = rules;


let centx = 0;
let centy = 0;

function restart(axiom, rules, ang, rat){
  ls.axiom = axiom;
  ls.parserules(rules);

  angle = radians(ang);
  ratio = rat;

  ls.start();
  draw();
}

function stepforward(){
  ls.stepforward();
  draw();
}

function stepbackward(){
  ls.stepbackward();
  draw();
}


function setangle(ang){
  angle = radians(ang);
  draw();
}

function setratio(rat){
  ratio = rat;
  draw();
}

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder');

  centx = width/2;
  centy = height/2;
  canvas.mousePressed(() => {
    centx = mouseX;
    centy = mouseY;
    console.log(centx, centy);
    draw();
  });

  length = height/2;
  angle = PI/6;

  noLoop();
  draw();
}

function draw() {

  resetMatrix();

  background(51);

  

  translate(centx, centy);

  stroke(255, 100);
  strokeWeight(3);
  fill(255,100);

  ls.turtle();

  // stroke(0,255,0);
  // line(-width,-height,width,height);
  // stroke(255,0,0);
  // line(-width,height,width,-height);
}