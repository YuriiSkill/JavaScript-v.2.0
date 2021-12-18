
let a = document.querySelector('.btn-1').onclick=()=>{

  for(let i=0;i<=16;i++){

    let out1=document.querySelector('.out-1');
    out1.innerHTML += i+ '_';
  }
};


let b = document.querySelector('.btn-2');

b.onclick=function(){

  for(let i=12;i<=38;i++){
    let out2 = document.querySelector('.out-2');
    out2.innerHTML += i+'_';
  }
};


let c =document.querySelector('.btn-3').onclick=()=>{
 
  for(let i=25;i>=7;i--){
    let out3 = document.querySelector('.out-3').innerHTML += i+'_'; 
  }
};