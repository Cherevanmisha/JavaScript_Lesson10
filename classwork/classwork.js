
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// document.getElementById('clck').onclick=()=>{
//     let num1 = document.forms.ap.ap1.value;
//     let num2 = document.forms.ap.ap2.value;
//     let num3 =document.forms.for.for1.value;
//     let num4 = document.forms.for.for2.value;
//     console.log(num1,num2,num3,num4)
//
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рnдків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// =============================


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

//
// const animals = ['cat', 'dog', 'bat'];
//
// let click = document.getElementById('click');
// click.onclick = function () {
//     let an = document.getElementById('animal').value;
//     for (const anElement of animals) {
//         if (anElement === an) {
//             alert('stop')
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const animals = ['cat', 'dog', 'bat'];
//
// let click = document.getElementById('click');
// click.onclick = function () {
//     let animal = document.getElementById('animal').value;
//     for (const anElement of animals) {
//         if (animal.includes(anElement)) {
//             alert('stop');
//         }
//     }
// }