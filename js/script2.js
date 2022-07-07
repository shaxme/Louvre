// let stepperInput = {
//   el:document.querySelector(".stepper-input .input"),
//   plusBtn:document.querySelector(".stepper-input .input .plus-btn"),
//   minusBtn:document.querySelector(".stepper-input .input .minus-btn"),
//   list:document.querySelector(".stepper-input .input .list"),
// };

// stepperInput.min = parseInt(stepperInput.el.getAttribute("min")),
// stepperInput.max = parseInt(stepperInput.el.getAttribute("max")),
// stepperInput.value = parseInt(stepperInput.el.getAttribute("value")),

// for(let i=stepperInput.min;i<=stepperInput.max;i++){
//   stepperInput.list.innerHTML+='<span>${i}</span>';
// };

// stepperInput.list.style.marginTop = '-${stepperInput.value*80}px';

function initStepperInput(node){
  let range = node.querySelector(".range .list");
  let minusBtn = node.querySelector(".munisBtn");
  let plusBtn = node.querySelector(".plusBtn");
  let input = node.querySelector(".input");


  let min = parseInt(input .min);
  let max = parseInt(input .max);
  let value = parseInt(input .value);
  
  let html = "";
  for(let i=min; i<=max; i++){
    html += '<span>${i}</span>';
  }
  
  range.style.width = ((max-min)+1) * 60 + "px";
  range.style.marginLeft = value*-60 +"px";
  range.innerHTML = html;
  range.querySelectorAll("span")[value-min].classList.add("active");
  
  minusBtn.addEventListener("click",function(){
    let value = parseInt(input.value)
    let index = value-min;
    if (index  < 0){
      return;
    }
    range.style
  });
}
