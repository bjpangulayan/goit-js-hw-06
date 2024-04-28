function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    boxesContainer.appendChild(box);
    width += 10;
    height += 10;
  }
}
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', function() {
  const amount = parseInt(document.querySelector('input[type="number"]').value);
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});