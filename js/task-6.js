function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {  
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const elem = document.createElement('div');
    elem.style.width = `${30 + i * 10}px`;
    elem.style.height = elem.style.width;
    elem.style.backgroundColor = randomColor;
    document.querySelector('#boxes').appendChild(elem);
  }
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

document.querySelector('button[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('#controls input[type="number"]');
  if (amount.value > 0 && amount.value <= 100) {
    destroyBoxes();
    createBoxes(amount.value);
    amount.value = '';
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);
