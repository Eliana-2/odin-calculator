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
    case `equals`:
      return num1;
  }
}

function isSpecial(string) {
  switch(string)
  {
    case `clear`:
    case `plus-minus`:
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
    case `equals`:
      return true;
    default:
      return false;
  }
}

function hasDecimal(string)
{
  return (string.split("").includes(`.`)) ? true: false;
}

function process(event)
{
  const num1 = document.querySelector(`#number-1`);
  const operator = document.querySelector(`.stored-operator`);
  const num2 = document.querySelector(`#number-2`);
  const id = event.target.getAttribute(`id`);
  const buttonText = event.target.textContent;

  if(id === `moo`) {
    mooing.currentTime = 0;
    mooing.play();
    return setMoo();}
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

function setMoo()
{
  const num1 = document.querySelector(`#number-1`);

  num1.textContent = `MOOOOOO`;
  num1.classList.toggle(`moo-display`);

  buttons.forEach((button) => {
    if(button.getAttribute(`id`) === `moo`) {
      button.textContent = `Moo!`;
    }
    else {
      button.textContent = `moo`;
    }

    button.classList.toggle(`moo-button`)
  })
}

function assignText(elemID)
{
  switch(elemID)
  {
    case `clear`:
      return `AC`;
    case `plus-minus`:
      return `\u00B1`;
    case `moo`:
      return `Moo?`;
    case `divide`:
      return `\u00F7`;
    case `seven`:
      return `7`;
    case `eight`:
      return `8`;
    case `nine`:
      return `9`;
    case `multiply`:
      return `\u00D7`;
    case `four`:
      return `4`;
    case `five`:
      return `5`;
    case `six`:
      return `6`;
    case `subtract`:
      return `\u2212`;
    case `one`:
      return `1`;
    case `two`:
      return `2`;
    case `three`:
      return `3`;
    case `add`:
      return `\u002B`;
    case `zero`:
      return `0`;
    case `decimal`:
      return `.`;
    case `equals`:
      return `\u003D`;
  }
}

function undoMoo()
{
  const num1 = document.querySelector(`#number-1`);

  num1.textContent = '';
  num1.classList.toggle(`moo-display`);

  buttons.forEach((button) => {
    button.textContent = assignText(button.getAttribute(`id`));
    button.classList.toggle(`moo-button`);
  })
}

function cowProcess(event)
{
  mooing.currentTime = 0;
  mooing.play();

  if(event.target.getAttribute(`id`) === `moo`)
  {
    return undoMoo();
  }
}

function doSomething(event)
{
  console.log(event.target.className.split(" "));

  if(event.target.className.split(" ").includes(`moo-button`)) {cowProcess(event);}
  else {process(event);}
}

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener(`click`, doSomething);
});

const mooing = document.querySelector(`#mooing`);