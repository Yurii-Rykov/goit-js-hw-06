const result = document.querySelector('#value');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

buttonPlus.addEventListener('click', () => {
    counterValue += 1;
    result.textContent = counterValue;
});
buttonMinus.addEventListener('click', () => {
    counterValue -= 1;
    result.textContent = counterValue;
});
