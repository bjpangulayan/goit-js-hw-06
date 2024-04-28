let initiaValue = 0;

let value = document.getElementById("value");
value.innerText = initiaValue;

let incBtn = document.querySelector('[data-action="increment"]');
let decBtn = document.querySelector('[data-action="decrement"]');

incBtn.onclick = () => {
    initiaValue += 1;
    value.innerText = initiaValue;
};
decBtn.onclick = () => {
    initiaValue -= 1;
    value.innerText = initiaValue;
};