// Циклы в JavaScript (часть 1)

// for(let i=0;i<6;i++){
  
//   console.log(i);
//   if(i==4) break;
// }

let div = document.querySelectorAll('.one');
console.log(div);
// div.style.background='red';

for(let i=0; i<div.length;i= i+1){
  // console.log(i);
  console.log(div[i]);

  div[i].style.background = 'red';
   div[i].onclick = two;
}

function two(){
  console.log('work!!!!');
}