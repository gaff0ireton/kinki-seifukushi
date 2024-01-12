const items = document.querySelector('.items');
const button = document.getElementById('buttonM');

button.addEventListener('click', function () {
    items.classList.toggle('open');
});

