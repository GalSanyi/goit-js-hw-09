 const refs = {
     startBtn: document.querySelector('button[data-start]'),
     stopBtn: document.querySelector('button[data-stop]'),
     bodyColor: document.querySelector('body'),
 }


 let hexColorId = null;
 //  refs.startBtn.disabled = false;

 refs.startBtn.addEventListener('click', onStartBtn);
 refs.stopBtn.addEventListener('click', onStopBtn);


 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

 function onStartBtn() {


     if (refs.startBtn.disabled) {
         return;
     }
     refs.startBtn.disabled = true;


     hexColorId = setInterval(() => {


         refs.bodyColor.style.backgroundColor = getRandomHexColor();
     }, 1000)


 }


 function onStopBtn() {
     clearInterval(hexColorId);
     if (refs.startBtn.disabled) {
         refs.startBtn.disabled = false;
     }




 }