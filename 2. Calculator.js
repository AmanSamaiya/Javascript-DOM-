


var result;



function Calculator(num1 , num2 , operator){

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  
    default:
      console.log("Invalid operator");
      break;
  }

  console.log(result) ;
  
}

Calculator(2,4,"+") ;  //this is a sample calling 