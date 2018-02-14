let add = document.querySelector('#addBtn');
let subtract = document.querySelector('#subtractBtn');
let addDiv = document.querySelector('#add');
let subtractDiv = document.querySelector('#subtract');
let addInput = document.querySelector('#addInput');
let addSubmit = document.querySelector('#addSubmit');
let addNext = document.querySelector('#addNext');
let subtractInput = document.querySelector('#subtractInput');
let subtractSubmit = document.querySelector('#subtractSubmit');
let subtractNext = document.querySelector('#subtractNext');
let addCircle1 = document.querySelector('#addCircle1');
let addCircle2 = document.querySelector('#addCircle2');
let subtractCircle1 = document.querySelector('#subtractCircle1');
let subtractCircle2 = document.querySelector('#subtractCircle2');
let addDiv1 = document.querySelector('#addDiv1');
let addDiv2 = document.querySelector('#addDiv2');
let subtractDiv1 = document.querySelector('#subtractDiv1');
let subtractDiv2 = document.querySelector('#subtractDiv2');
let addResultDisplay = document.querySelector('#addResult');
let subtractResultDisplay = document.querySelector('#subtractResult');
let correctAnswer = document.querySelector('#correct');
let wrongAnswer = document.querySelector('#wrong');

let userInput = '';
let addResult, subtractResult;
let correctAnswers = 0, wrongAnswers = 0;

document.body.onload = () => {
  setScore();
  generateAddQuestions();
}
add.addEventListener('click', () => {
  setScore();
  clearAddResult();
  generateAddQuestions();
  subtract.classList.remove('active');
  add.classList.add('active');
  subtractDiv.style.display = 'none';
  addDiv.style.display = 'block';
});

subtract.addEventListener('click', () => {
  setScore();
  clearSubtractResult();
  generateSubtractQuestions();
  add.classList.remove('active');
  subtract.classList.add('active');
  addDiv.style.display = 'none';
  subtractDiv.style.display = 'block';
});

addInput.addEventListener('change', (e) => {
  userInput = e.target.value;
});

addNext.addEventListener('click', (e) => {
  setScore();
  clearAddResult();
  generateAddQuestions();
});

addSubmit.addEventListener('click', (e) => {
  let i = document.createElement('p');
  if (+userInput === addResult) {
    addResultDisplay.innerText = 'Great! Correct Answer';
    addSubmit.disabled = true;
    addSubmit.classList.add('disable');
    ++correctAnswers;
    setScore();
  } else if (userInput !== addResult && userInput !== '') {
    addResultDisplay.innerText = 'Wrong Answer. Correct answer:' + addResult;
    addSubmit.disabled = true;
    addSubmit.classList.add('disable');
    ++wrongAnswers;
    setScore();
  } else {
    addResultDisplay.innerText = 'Please Enter a number';
  }
  addResultDisplay.style.display = 'block'
});

subtractInput.addEventListener('change', (e) => {
  userInput = e.target.value;
});

subtractNext.addEventListener('click', (e) => {
  setScore();
  clearSubtractResult();
  generateSubtractQuestions();
});

subtractSubmit.addEventListener('click', (e) => {
  let i = document.createElement('p');
  if (+userInput === subtractResult) {
    subtractResultDisplay.innerText = 'Great! Correct Answer';
    subtractSubmit.disabled = true;
    subtractSubmit.classList.add('disable');
    ++correctAnswers;
    setScore();
  } else if (userInput !== subtractResult && userInput !== '') {
    subtractResultDisplay.innerText = 'Wrong Answer. Correct answer:'+ subtractResult;
    subtractSubmit.disabled = true;
    subtractSubmit.classList.add('disable');
    ++wrongAnswers;
    setScore();
  } else {
    subtractResultDisplay.innerText = 'Please Enter a number';
  }
  subtractResultDisplay.style.display = 'block'
});

const generateAddQuestions = () => {
  let number1 = Math.floor(Math.random() * 8);
  let number2 = Math.floor(Math.random() * (8 - number1));
  let c;
  for (let i = 0; i < number1; i++) {
    c = document.createElement('div');
    c.className = 'circle';
    addDiv1.insertBefore(c, addCircle1);
  }
  for (let i = 0; i < number2; i++) {
    c = document.createElement('div');
    c.className = 'circle';
    addDiv2.insertBefore(c, addCircle2);
  }

  addResult = number1 + number2 + 2;
}

const generateSubtractQuestions = () => {
  let number1 = Math.floor(Math.random() * 8);
  let number2 = Math.floor(Math.random() * (number1 - 0));
  let c;
  for (let i = 0; i < number1; i++) {
    c = document.createElement('div');
    c.className = 'circle';
    subtractDiv1.insertBefore(c, subtractCircle1);
  }
  for (let i = 0; i < number2; i++) {
    c = document.createElement('div');
    c.className = 'circle';
    subtractDiv2.insertBefore(c, subtractCircle2);
  }

  subtractResult = number1 - number2;
}

const clearAddResult = () => {
  addResultDisplay.innerText = 'Enter Your Answer:';
  addSubmit.disabled = false;
  addSubmit.classList.remove('disable');
  while (addDiv1.firstChild !== addDiv1.lastElementChild) {
    addDiv1.removeChild(addDiv1.firstChild);
  }
  while (addDiv2.firstChild !== addDiv2.lastElementChild) {
    addDiv2.removeChild(addDiv2.firstChild);
  }
}
const clearSubtractResult = () => {
  subtractResultDisplay.innerText = 'Enter Your Answer:';
  subtractSubmit.disabled = false;
    subtractSubmit.classList.remove('disable');
  while (subtractDiv1.firstChild !== subtractDiv1.lastElementChild) {
    subtractDiv1.removeChild(subtractDiv1.firstChild);
  }
  while (subtractDiv2.firstChild !== subtractDiv2.lastElementChild) {
    subtractDiv2.removeChild(subtractDiv2.firstChild);
  }
}

const setScore = () => {
  correctAnswer.innerText = correctAnswers;
  wrongAnswer.innerText = wrongAnswers;
}