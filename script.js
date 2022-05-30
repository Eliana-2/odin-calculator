function add(num1, num2)
{
  return num1 + num2;
}

function subtract(num1, num2)
{
  return num1 - num2;
}

function multiply(num1, num2)
{
  return num1 * num2;
}

function divide(num1, num2)
{
  return num1 / num2;
}

function operate(operator, num1, num2)
{
  switch(operator)
  {
    case `+`:
      return add(num1, num2);
    case `-`:
      return subtract(num1, num2);
    case `*`:
      return multiply(num1, num2);
    case `/`:
      return divide(num1, num2);
  }
}

/*function isSpecial(string) {
  switch(string)
  {
    case `AC`:
    case `+/-`:
    case `%`:
    case `=`:
      return true;
    default:
      return false;
  }
}

function isOperator(string) {
  switch(string)
  {
    case `+`:
    case`-`:
    case `x`:
    case `/`:
      return true;
    default:
      return false;
  }
}

function process(e)
{
  e.target.textContent = `moo`;
}

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener(`click`, process);
});*/ 
