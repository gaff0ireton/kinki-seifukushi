// const items = document.querySelector('.items');
const items01 = document.querySelector('.items.i01');
const items02 = document.querySelector('.items.i02');
const items03 = document.querySelector('.items.i03');
const button01 = document.getElementById('buttonM01');
const button02 = document.getElementById('buttonM02');
const button03 = document.getElementById('buttonM');
console.log(items01);

// console.log(button01);


button01.addEventListener('click', function () {
    items01.classList.toggle('open');
});

button02.addEventListener('click', function () {
    items02.classList.toggle('open');
});
button03.addEventListener('click', function () {
    items03.classList.toggle('open');
});