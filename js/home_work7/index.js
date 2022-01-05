let a1=25;
let btn = document.querySelector('.btn').onclick=function t1(){
  let out= document.querySelector('.out');
  out.innerHTML= a1;
};

function t2(){
  return a1;
}

t2();

let c =t2();
console.log(c);

