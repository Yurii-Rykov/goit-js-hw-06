
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', registrationForm);

function registrationForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((name, value) => {
        if (value === '') {
            alert('все поля должны быть заполнены.')
        } else {
            console.log(name, value);
        };

    formEl.reset();
        
    });
};