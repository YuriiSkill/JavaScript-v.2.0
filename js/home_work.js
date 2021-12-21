
// console.log('Юра');
// console.log(9);
// console.log('Добро '+'пожаловать '+ 'на курс');


// // UNIT 2. ОСНОВЫ ВВОДА ДАННЫХ
// let a = 7;
// let b = 9;
// console.log(a*b);

// let c = 7;
// let d = 9;
// console.log(c/d);

// let e = 3;
// let f = 5;
// console.log(e+f);

// UNIT 3. ОПЕРАТОР IF, ELSE, SWITCH CASE - ВЫБОР В JAVASCRIPT

// let button = document.querySelector('.button');

// let inputIn = document.querySelector('.input');
// let div = document.querySelector('.out');

// button.onclick = function(){
// let compare = +inputIn.value;
// if(compare==4){
//   div.innerHTML = true;
// }

// else{
//   div.innerHTML = false;
// }

// }






// let inputIn = document.querySelector('.input');
// let button =document.querySelector('.button');
// let out2 = document.querySelector('.out-2');


//  button.onclick = () => {
//   let num = 31;
//   let number = inputIn.value;
//    if(number<num){
//      console.log(num);
//    }
//    else if(number>num){
//     console.log(number);
//    }

//    else{}
// };


let inputGetIn = document.querySelector('.enter-1');
let inputGetOn = document.querySelector('.enter-2');

let buttonPush = document.querySelector('.push');
let exit  = document.querySelector('.out-3');

buttonPush.onclick = () =>{
  

  let num1 = +inputGetIn.value;
  let num2 = +inputGetOn.value;

if(num1>num2){
  exit.innerHTML = num1;
}
 else if(num1<num2){
  exit.innerHTML = num2;
}

else{
  exit.innerHTML = 'недопустимое значение';
}
  

}


// INPUT, RANGE, TEXTAREA, CHECKBOX

