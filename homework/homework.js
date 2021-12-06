// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let click = document.getElementById("click");
// let text = document.getElementById('text');
// text.style.display = 'block'
// click.onclick = () => {
//     if (text.style.display === 'block') {
//         text.style.display = 'none'
//     } else {
//         text.style.display = 'block';
//     }
// };





//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let click = document.getElementById('click')
// click.onclick = () => {
//     click.style.display = 'none'
// };




// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let click = document.getElementById('click');
// click.onclick = () => {
//     let age = document.getElementById('age');
//     let value = age.value;
//     if (value >= 18 && value > 0) {
//         alert('Welcome');
//     } else {
//         alert('Stop')
//     }
// };




// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu= document.querySelector('.menu');
// let title = menu.querySelector('.title');
// title.onclick = function () {
//     menu.classList.toggle('onOff');
// };



// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {title: 'Mazda', color: 'white'},
//     {title: 'Porsche', color: 'Black'},
//     {title: 'Hyundai', color: 'Green'},
//
// ];
// let divElement = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = item.title;
//     p.innerHTML = item.color;
//     btn.innerHTML = 'hide'
//
//     btn.onclick = () => {
//         p.classList.add('pHidden');
//     }
//     div.append(h3, p, btn);
//     divElement.append(div, hr);
// }
// document.body.appendChild(divElement)