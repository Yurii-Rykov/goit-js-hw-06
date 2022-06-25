const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
  
const listRef = document.querySelector('.gallery');

const elements = images.map(element => {
  return `<li><img src='${element.url}' alt='${element.alt}' width='400px'></img></li>`;
});
listRef.insertAdjacentHTML('afterbegin', elements);

// const listRef = document.querySelector('.gallery');

// const elements = images.map(element => {
//   const li = document.createElement('li');
//   li.style.listStyleType = 'none';
//   const image = document.createElement("img");
//   image.src = element.url;
//   image.alt = element.alt;
//   image.style.width = '400px';
//   li.append(image);
//   return li;
// });

// listRef.append(...elements);
