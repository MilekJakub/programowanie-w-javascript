const inputContainerEl = document.querySelector('#input-container');
const resultsEl = document.querySelector('#results');
const addInputBtn = document.querySelector('#add-input');
const numbersEl = [ ...document.querySelectorAll('.number') ];

const sumEl = document.querySelector('#sum');
const averageEl = document.querySelector('#average');
const minEl = document.querySelector('#min');
const maxEl = document.querySelector('#max');

function inputEventHandler(evt) {
    if (!evt.target.classList.contains('number')) return;

    const values = [];

    for (let i = 0; i < numbersEl.length; i++) {
        const parseResult = parseInt(numbersEl[i].value);

        if (isNaN(parseResult)) {
            numbersEl[i].classList.add('wrong-number');
            values.push(0);
        }
        else {
            numbersEl[i].classList.remove('wrong-number');
            values.push(parseResult);
        }
    }

    let sum = 0;
    let average, min, max;
    
    for (let i = 0; i < values.length; i++) sum += values[i];

    average = sum / values.length;
    min = Math.min(...values);
    max = Math.max(...values);

    sumEl.textContent = sum;
    averageEl.textContent = average;
    minEl.textContent = min;
    maxEl.textContent = max;
}

function clickEventHandler() {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = "0";
    newInput.classList.add("number");
    numbersEl.push(newInput);
    inputContainerEl.appendChild(newInput);
}

inputContainerEl.addEventListener('input', inputEventHandler);
addInputBtn.addEventListener('click', clickEventHandler);
