const randomColor = function(){
const hex = "0123456789ABCDEF" ;// color ki id is in hex format
// since we want a random color , we need to generate it using random function from math library 
// color ki id is in this format :- #ffffff (so basically 6 except the # )
let color = '#' ;
//we will now create a for loop to get random values everytime 
for ( let i = 0 ; i <6 /*(less than 6 as 0 se start hota he ye */ ; i ++)
    {
        color += hex[Math.floor(Math.random()*16)] ;
      
    }  

    return color
} ;
let IntervalId
const  startChanging = function(){
   IntervalId =  setInterval(changeStart, 1000) ;
    function changeStart() {
    document.body.style.backgroundColor = randomColor();
    }
} ;

const stopChanging = function(){
  clearInterval (IntervalId) ;
} ;

document.querySelector('#start').addEventListener('click',startChanging);
document.querySelector('#stop').addEventListener('click' , stopChanging);
