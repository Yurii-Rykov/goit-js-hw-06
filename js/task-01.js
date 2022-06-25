const menuItems = document.querySelectorAll('.item');
console.log('Number of categories: ', menuItems.length);

menuItems.forEach(element => {
    let elementTitle = element.querySelector('h2').textContent;
    let elementAnimals = element.querySelectorAll('li');
    let lengthAnimal = elementAnimals.length;

    console.log('Category: ', elementTitle);
    console.log('Elements: ', lengthAnimal);
});




