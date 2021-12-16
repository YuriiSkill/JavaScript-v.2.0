// UNIT 3. ОПЕРАТОР IF, ELSE, SWITCH CASE - ВЫБОР В JAVASCRIPT


// let a = 19;

// if(a==9){
//   console.log('да');
// }
// else{
//   console.log('нет');

//   let b =6;

// if(b!=9){
//   console.log('да');
// }
// else{
//   console.log('нет');
// }
// }

// let c =9;

// if(c>=9){
//   console.log('да');
// }
// else{
//   console.log('нет');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');


//() => стрелочная функция
button.onclick = () => {
  let num = +input.value;
  if(num>=16 && num<60){
    console.log('welcome')
  }
  else if(num>60){
    console.log('ты точно сюда?')
  }
  else{
    console.log('access block');
  }

  switch(num){
    case 15:
      console.log('еще год потерпи!');
      break;
    case 17:
      console.log('ура можно!');
      break;
    default:
      console.log('ооокк');

  }
}

