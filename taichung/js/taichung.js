'use strick';

const modal=document.querySelector('.modal-layer');
const modal2=document.querySelector('.modal-layer2');
const modal3=document.querySelector('.modal-layer3');
const modal4=document.querySelector('.modal-layer4');


function museum1(){
  modal.classList.add('isopen');
}

function museum2(){
  modal2.classList.add('isopen');
}

function museum3(){
  modal3.classList.add('isopen');
}

function museum4(){
  modal4.classList.add('isopen');
}


function modalClose(){
  modal.classList.remove('isopen');
  modal2.classList.remove('isopen');
  modal3.classList.remove('isopen');
  modal4.classList.remove('isopen');
}