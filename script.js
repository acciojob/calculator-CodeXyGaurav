const input = document.getElementById("input");

function appendValue(value){
  input.value += value;
}

// Number buttons
for(let i = 0; i <= 9; i++){
  document
    .getElementById(`block${i}`)
    .addEventListener("click", function(){
      appendValue(i);
    });
}

// Operator buttons
document.getElementById("plus").addEventListener("click", function(){
  appendValue("+");
});

document.getElementById("minus").addEventListener("click", function(){
  appendValue("-");
});

document.getElementById("multiply").addEventListener("click", function(){
  appendValue("*");
});

document.getElementById("divide").addEventListener("click", function(){
  appendValue("/");
});

// Decimal button
document.getElementById("dot").addEventListener("click", function(){
  appendValue(".");
});

// Answer button
document.getElementById("ans").addEventListener("click", function(){

  try{
    input.value = eval(input.value);
  }
  catch(error){
    input.value = "Error";
  }

});

// Clear button
document.getElementById("clr").addEventListener("click", function(){
  input.value = "";
});
