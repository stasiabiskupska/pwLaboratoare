//TODO  5 Задача №3 - событие click
// Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.

let btn = document.getElementById('makeOrange');

btn.addEventListener('click', () => {
    document.body.style.background = 'orange';
});
