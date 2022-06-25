function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();
 
const boxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const creatEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
let basicSize = 30;


destroyEl.addEventListener('click', destroyBoxes);
creatEl.addEventListener('click', () => createBoxes(inputEl.value));

function createBoxes(amount){
  let arr = [];
  for (let i = 0; i < amount; i += 1){
    const div = document.createElement('div');
    arr.push(div)
    let size = basicSize + i * 10;
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px;`;
  }
boxEl.append(...arr);
};

function destroyBoxes() {
  boxEl.innerHTML = "";
}



