document.querySelector('.btn').onclick=()=>{

  console.log(document.querySelector('.number').value);
};


document.querySelector('.btn-2').onclick = () =>{
  document.querySelector('.colorize').value;

  document.querySelector('.btn-2').style.backgroundColor =  document.querySelector('.colorize').value;
};


document.querySelector('.rangerover').oninput = () => {

  console.log(document.querySelector('.rangerover').value);

  document.querySelector('span').innerHTML = document.querySelector('.rangerover').value;

};

document.querySelector('.btn-4').onclick = () => {
// console.log(document.querySelector('.ckecking').value);

let myChek = document.querySelector('.ckecking');
console.log(myChek.checked);

if (myChek.checked){

}

else{

}
};


document.querySelector('.btn-5').onclick = () => {

console.log(document.querySelector('#area').value);
let text = document.querySelector('#area');

text.value ="privet";

};



document.querySelector('.btn-6').onclick = (event) => {

  event.preventDefault();

  let form = document.querySelector('form');
  console.log(form);
  console.log(form.elements.six.value);
   console.log(form.elements.four.value);
}




