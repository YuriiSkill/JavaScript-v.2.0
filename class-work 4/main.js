
// document.querySelector('button').onclick = () => {

//   console.log(document.querySelector('#one').value);
// }

//color------------------------------------------------

// document.querySelector('.colormania_button').onclick = () => {

//   console.log(document.querySelector('#one_color').value);

//   //style
//   document.querySelector('.colormania_button').style.backgroundColor=
//   document.querySelector('#one_color').value;

// }


//date----------------------------------------------------------------

// document.querySelector('.datemania_button').onclick = () => {

//   console.log(document.querySelector('#one_date').value);

//   //style
//   document.querySelector('.datemania_button').style.backgroundColor=
//   document.querySelector('#one_date').value;

// }


//range----------------------------------------------------------------

document.querySelector('.rangemania_button').onclick = () => {

  console.log(document.querySelector('#one_range').value);

  //style
  document.querySelector('.rangemania_button').style.backgroundColor=
  document.querySelector('#one_range').value;

};

document.querySelector('#one_range').oninput = () =>{

  console.log(document.querySelector('#one_range').value);

  document.querySelector('span').innerHTML = document.querySelector('#one_range').value;
};


//checkbox-------------------------------------------------

document.querySelector('#btn-1').onclick = () => {

   console.log(document.querySelector('#i-2').value);
   let myCheckBox =document.querySelector('#i-2');

   console.log(myCheckBox.checked);
   
   if(myCheckBox.checked){
    console.log('нажат');
   }
   else{
    console.log('нажат');
   }
};

//textarea-----------------------------------------------------

document.querySelector('#btn-2').onclick = () => {

  let text = document.querySelector('#two');
  console.log(text.value);
  text.value = 'one';
}

//form---------------------------------------

document.querySelector('#btn-3').onclick = (event) => {

  event.preventDefault();
  // let text = document.querySelector('#tree');
  // console.log(text.value);
  // text.value = 'one';

  let form = document.querySelector('form');
  console.log(form);
  console.log(form.elements.treearea.value);
  console.log(form.elements.tree.value);


};

