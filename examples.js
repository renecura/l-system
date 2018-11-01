const examples = {

  "koch-curve" : {
    "label" : "Koch Curve",
    "axiom" : "F",
    "rules" : "F->F-F+F+F-F",
    "angle" : "90",
    "ratio" : 1/3  
  },
  "cantor-set" : {
    "label" : "Cantor Set",
    "axiom" : "F",
    "rules" : "F->FMF\nM->MMM",
    "angle" : "90",
    "ratio" : 1/3  
  },
  "sierpinski-triangle" : {
    "label" : "Sierpinski Triangle",
    "axiom" : "F-G-G",
    "rules" : "F->F-G+F+G-F\nG->GG",
    "angle" : "120",
    "ratio" : 0.5  
  },
  "sierpinski-arrowhead" : {
    "label" : "Sierpinski Arrowhead",
    "axiom" : "F",
    "rules" : "F->G-F-G\nG->F+G+F",
    "angle" : "60",
    "ratio" : 0.5  
  },
  "fractal-plant" : {
    "label" : "Fractal Plant",
    "axiom" : "X",
    "rules" : "X->F+[[X]-X]-F[-FX]+X\nF->FF",
    "angle" : "25",
    "ratio" : 0.5  
  },
  "fractal-fern" : {
    "label" : "Fractal Fern",
    "axiom" : "X",
    "rules" : "X->F[+X][-X]FX\nF->FF",
    "angle" : "25.7",
    "ratio" : 0.5  
  },
  "fractal-cardo" : {
    "label" : "Fractal Cardo",
    "axiom" : "F",
    "rules" : "F->F[+F]F[-F]F",
    "angle" : "25.7",
    "ratio" : 0.5  
  }
}



function loadexample(ex){

  document.getElementById('axiomInput').value = examples[ex].axiom;
  document.getElementById('rulesInput').value = examples[ex].rules;
  document.getElementById('angleInput').value = examples[ex].angle;
  document.getElementById('scaleInput').value = examples[ex].ratio;

}

function createbuttons(){
  const bdiv = document.getElementById("exampleButtons");
  for (const ex in examples) {
    const b = document.createElement("button");
    
    b.innerHTML = examples[ex].label;
    b.setAttribute("type","button");
    b.setAttribute("class","btn btn-light btn-sm");
    b.setAttribute("value",ex);
    b.setAttribute("onclick","loadexample(this.value)");

    bdiv.appendChild(b);
  }
}

createbuttons();