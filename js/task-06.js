const inputEl = document.querySelector('#validation-input');
const number = Number(inputEl.dataset.length)

const result = inputEl.addEventListener('input', event => {
    let value = event.currentTarget.value;
    let valueNumber = value.length;

    inputEl.addEventListener('blur', () => {  
        
        if (valueNumber === number) {
            inputEl.classList.add('valid');
            inputEl.classList.remove('invalid');
        } else {
            inputEl.classList.add('invalid');
            inputEl.classList.remove('valid');
        }   
    });   
});
    

