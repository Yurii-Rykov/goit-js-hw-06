const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
console.log(textOutput);

textInput.addEventListener('input', (event) => {
    let value = event.currentTarget.value; // те що знаходиться в інпуті
    if (value === '') {
        textOutput.textContent = 'Anonymous!'
    } else {
        textOutput.textContent = value;
    }
})
 