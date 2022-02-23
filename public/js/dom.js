const oneElementGetter = (sellector) => document.querySelector(sellector);
const url = '/getFruites';
const container = oneElementGetter('.container');
const form = oneElementGetter('.form');
const input = oneElementGetter('.input');
const loader = document.querySelector('.loader');

const toggleDisplay = (element) => {
  element.classList.toggle('hidden');
};

const elementCreator = (name) => document.createElement(name);

const elementWithValue = (name, value) => {
  const element = elementCreator(name);
  element.innerText = value;
  return element;
};
const imageCreator = (src) => {
  const img = elementCreator('img');
  img.src = src;
  return img;
};

const appendElement = (parent, child) => {
  parent.appendChild(child);
};
const appendArrayOfElements = (parent, children) => {
  children.forEach((element) => {
    parent.appendChild(element);
  });
};
const lisCreator = (nutritions) => {
  const li1 = elementWithValue('li', `calories: ${nutritions.calories}`);
  const li2 = elementWithValue(
    'li',
    `carbohydrates: ${nutritions.carbohydrates}`
  );
  const li3 = elementWithValue('li', `fat: ${nutritions.fat}`);
  const li4 = elementWithValue('li', `protein: ${nutritions.protein}`);
  const li5 = elementWithValue('li', `sugar: ${nutritions.sugar}`);
  const lis = [li1, li2, li3, li4, li4, li5];
  return lis;
};
const cardCreator = (data, image) => {
  const card = elementCreator('div');
  card.setAttribute('class', 'card');
  const cardImage = elementCreator('div');
  cardImage.setAttribute('class', 'card-image');
  const img = imageCreator(image);
  img.setAttribute('class', 'image');
  const ul = elementCreator('ul');
  ul.setAttribute('class', 'list');
  const h3 = elementWithValue('h3', data.name);
  h3.setAttribute('class', 'fruit-name');
  const lis = lisCreator(data.nutritions);
  appendArrayOfElements(ul, lis);
  appendElement(cardImage, img);
  appendElement(card, cardImage);
  appendElement(card, h3);
  appendElement(card, ul);
  return card;
};
const renderFruits = (data, image) => {
  const card = cardCreator(data, image);
  appendElement(container, card);
};

fetchFrute(url, renderFruits);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') return;
  toggleDisplay(loader);

  container.textContent = '';
  searchFruit('/search', input.value, (response) => {
    const { data, image } = response;
    if (data.error) {
      toggleDisplay(loader);
      container.textContent = '';
      container.textContent = `Sorry we couldnt find any fruit with this name ${input.value}`;
    } else {
      renderFruits(data, image);
      toggleDisplay(loader);
    }
  });
});
