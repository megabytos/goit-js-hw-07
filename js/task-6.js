function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  document.querySelector('#boxes').insertAdjacentHTML('afterbegin',
      [...Array(amount).keys()].map(i => `<div style="width:${30 + i * 10}px; height:${30 + i * 10}px; background-color: ${getRandomHexColor()}"></div>`).join('')
    );
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

document.querySelector('button[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('#controls input[type="number"]');
  if (amount.value > 0 && amount.value <= 100) {
    destroyBoxes();
    createBoxes(Number(amount.value));
    amount.value = '';
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);
