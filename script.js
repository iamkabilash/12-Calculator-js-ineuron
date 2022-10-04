let expression = "";
// const textview = document.querySelector(".textview");

function insert(num){
  expression += num;
  // console.log(textview);
  const textview = document.querySelector(".textview");
  textview.value = expression;
}

function equals(){
  const textview = document.querySelector(".textview");
  try{
    textview.value = eval(expression);
  }
  catch(err){
    textview.value = "Syntax error";
  }
  expression = "";
}

function clean(){
  expression = "";
  const textview = document.querySelector(".textview");
  textview.value = expression;
}

function back(){
  expression = expression.slice(0, -1);
  const textview = document.querySelector(".textview");
  textview.value = expression;
}