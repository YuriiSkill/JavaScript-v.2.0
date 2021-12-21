

let btn1 = document.querySelector('.btn-1').onclick=()=>{

 let text = document.querySelector('.text');
  console.log(text.value);

};

let btn2 = document.querySelector('.btn-2').onclick=()=>{

  let color = document.querySelector('.color');
  console.log(color.value);
  document.querySelector('.btn-2').style.backgroundColor =color.value;

};


// let btn3= document.querySelector('.range').oninput=()=>{
//   console.log(document.querySelector('.range').value);
// };

let btn3= document.querySelector('.btn-3').onclick=()=>{
  let range = document.querySelector('.range').value;
  console.log(range);
  let span=document.querySelector('.span').innerHTML=range;
};

let btn4 = document.querySelector('.btn-4').onclick=()=>{
  let checki = document.querySelector('.checki');
console.log(checki.checked);
if (checki.checked){
console.log('галочка стоит');
}

else{

}
};


let btn5 = document.querySelector('.btn-5').onclick=()=>{

  let area =document.querySelector('#area');
  console.log(area.value);
  area.value='privet';

};


