
let c = '((((((()))))))';

console.log(c.length);
let count = 0;
for (let i = 0; i < c.length; i ++){
  // console.log(c[i]);
  if(c[i] =='('){
    count++; //увеличить на единицу
}
if(c[i] == ')' ){
count= count-1; //count--
}
if(count<0){
  // console.log(false);
  break;
}
}

if(count!=0) {console.log('false')
}
else{
  console.log(true);
}


console.log(count);
