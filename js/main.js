console.log('hello'); //строки берем в кавычки
console.log('world');
console.log('55');
console.log(333);
console.log('hello'+'world');//конкатенация
console.log('hello '+'world');
console.log('hello'+' '+'world');


// alert('hello');
// alert('hello');
// alert('hello');

// СТАРЫЕ КОМАНДЫ
document.getElementById('out').innerHTML = 'hello';//замена на hello
document.getElementById('out').innerHTML = 2019; //замена на цифры
document.getElementById('out').innerHTML = '<b>2020</b> '; //замена на цифры жирным шрифтом

// НОВЫЕ НА ОСНОВЕ СИНТАКСИССА CSS

// document.querySelector('h2').innerHTML = 5; //первый попавшийся элемент;
document.querySelector('.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777; //есть #
document.getElementById('one').innerHTML = 777; //нет #

let a;
    a = document.querySelector('#one'); //внытрь а положили параграф

    a.innerHTML = 999; //присвоили параграфу 999

    




