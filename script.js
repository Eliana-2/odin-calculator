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

function operate(num1, operator, num2)
{
  switch(operator)
  {
    case `add`:
      return add(num1, num2);
    case `subtract`:
      return subtract(num1, num2);
    case `multiply`:
      return multiply(num1, num2);
    case `divide`:
      return divide(num1, num2);
  }
}

function specialOperate(num1, operator)
{
  switch(operator)
  {
    case `clear`:
      return ``;
    case `plus-minus`:
      return num1 * -1;
    case `percent`:
      return (num1 * 100) + `%`;
    case `equals`:
      return num1;
  }
}

function isSpecial(string) {
  switch(string)
  {
    case `clear`:
    case `plus-minus`:
    case `percent`:
    case `equals`:
      return true;
    default:
      return false;
  }
}

function isOperator(string) {
  switch(string)
  {
    case `add`:
    case`subtract`:
    case `multiply`:
    case `divide`:
    case `clear`:
    case `plus-minus`:
    case `percent`:
    case `equals`:
      return true;
    default:
      return false;
  }
}

function hasDecimal(string)
{
  console.log(string.split(""));
  return (string.split("").includes(`.`)) ? true: false;
}

function process(event)
{
  const num1 = document.querySelector(`#number-1`);
  const operator = document.querySelector(`.stored-operator`);
  const num2 = document.querySelector(`#number-2`);
  const id = event.target.getAttribute(`id`);
  const buttonText = event.target.textContent;
  console.log(buttonText);

  if(!isOperator(id)) {
    if(operator.textContent === ``) {
      if(!(hasDecimal(num1.textContent) && buttonText === `.`)) {num1.textContent += buttonText;}}
    else {
      if(!(hasDecimal(num2.textContent) && buttonText === `.`)) {num2.textContent += buttonText;}}
  }
  else{
    if(operator.textContent !== `` && (num1.textContent !== `` && num2.textContent !== ``)) {
      num1.textContent = operate(+num1.textContent, operator.getAttribute(`id`), +num2.textContent).toFixed(2);
      num2.textContent = ``;
      operator.textContent = ``;
    }
    if(isSpecial(id)) {
      if(num1.textcontent !== ``) {num1.textContent = specialOperate(num1.textContent, id);}
    }
    else {
      operator.textContent = buttonText
      operator.setAttribute(`id`, id);
    }
  }
}

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener(`click`, process);
});