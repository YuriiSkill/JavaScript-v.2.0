let a = 6;
let b = 'hello';

console.log(a);

let inputIn = document.querySelector('.input-in');//input
let button = document.querySelector('button'); //button

let div = document.querySelector('.out'); 


button.onclick = function(){
  // console.log('work');
  // console.log(inputIn.value); //value это то что введено в input
  let b = +inputIn.value;//+ позволяет перевести в число!!!!!
  console.log(b*2);
  // console.log(b/0); //выдаст infinity
  // console.log(b+10); //'66'+'10'=6610
  div.innerHTML = b;
  inputIn.value = '';
};

// console.log(getIn);