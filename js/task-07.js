const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', changeSlider);

function changeSlider(event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
    console.log(event.currentTarget.value);
}