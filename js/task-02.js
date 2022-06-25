const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients')
const itemList = ingredients.map((ingredient) => {
    let items = document.createElement('li');
    items.textContent = ingredient;
  return items;
  })

listRef.append(...itemList);