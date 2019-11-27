
let input_Values = document.querySelector('.Value');
let inputOut = document.querySelector('.input-out');
let btns = document.querySelector('.btn')
let error = document.querySelector('.error');
let previous_guesss = document.querySelector('.previous-guesss');
let restart = document.querySelector('.restart');
let too_high = document.querySelector('.too-high');
let  congratulation = document.querySelector('.congratulation');
let too_low = document.querySelector('.too-low');
let bgImage = document.querySelector('.quess-container');
counter = 0


// /* POP UP ALERT WHEN YOU CLICK THE SUN,MIT BUTTON TEB TIMEES  
// /* BOX-MODAL  HERE */

let boxBtn = document.querySelector('.modal-btn');
let boxContainer = document.querySelector('.box-modal');
let btnClose = document.querySelector('.close-btn');
let outSide = window;



// generate the random number 

let numberToGuess = Math.floor(Math.random() *100 +1);
// console.log(numberToGuess)

btns.addEventListener('click', function(e){
    e.preventDefault(e)
 
      counter += 1
        MyValue = Number(input_Values.value);
      
        if(MyValue === numberToGuess){
            bgImage.classList.add('quess-containerImage');
            bgImage.classList.remove('quess-container')
            previous_guesss.textContent += MyValue + '';
            congratulation.classList.add('congre')
            congratulation.textContent += 'congratulation! You got it right!' +" " + MyValue;
            error.textContent = '';
            error.classList.remove('errors_alert');
            too_high.textContent = '';
            too_low.textContent = '';

            
        }else if (counter == 10){
    
            boxContainer.style.display = 'block'
          
        }else if (MyValue  == '' ||  MyValue <= 0){
            error.classList.add('errors_alert')
            error.textContent = 'The input field can not be empty And Please Select a random between 1 to 100 only';
          
        }else if(MyValue <= 0){
            error.classList.add('errors_alert')
            error.textContent = '';

        }else if (MyValue > numberToGuess){
            previous_guesss.textContent += MyValue + ' '
            error.classList.add('errors_alert')
            too_high.textContent = 'Your guess Is too high'
            error.textContent = 'Wrong guessing! Try Again ';
            too_low.textContent = '';
 

        }else if (MyValue < numberToGuess){
            previous_guesss.textContent += MyValue + ' '
            error.classList.add('errors_alert');
            error.textContent = 'Wrong guessing! Try Again '; 
            too_low.textContent = 'Your guess Is too low ';
            too_high.textContent = '';
         
            
        }else{
            previous_guesss.textContent += MyValue + ' ';
            congratulation.classList.remove('congre')
            error.classList.add('errors_alert')
            congratulation.textContent = '';
            error.textContent = 'Wrong guessing! Try Again ';   
        }
        
})
btnClose.addEventListener('click', function(){
    boxContainer.style.display = 'none';
})
restart.addEventListener('click', function(){ 
})



// function overClick(){
   
//     }