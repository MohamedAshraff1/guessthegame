'use strict';

// document.querySelector('.check').addEventListener('click', function () {
//   const valu = document.querySelector('.guess').value;
//   document.querySelector('.number').textContent = valu;
// });

// let ash= document.querySelector('.ash')
// console.log(ash.textContent);

// const set_element=document.querySelector('oldclass')
// set_element.setAttribute('class','newclass')
// console.log(set_element.className);



const numbers=Math.trunc(Math.random()*20)+1
let scc=document.querySelector('.score').textContent
let High=document.querySelector('.highscore').textContent

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    // when input is no number
    if(!guess){
        document.querySelector(".message").textContent='😢 No number'
    }// when input is gr than guess number
    else if(guess>numbers){
        if (scc>0){
        document.querySelector(".message").textContent='Too High'
         scc--
        document.querySelector('.score').textContent=scc
        }else{
            document.querySelector('body').style.backgroundColor='red'
            document.querySelector(".message").textContent='loss the game'
        }

    }// when input is lr than guess number
    else if(guess<numbers){ 
        if (scc>0){
            document.querySelector(".message").textContent='Too Low'
            scc--
            document.querySelector('.score').textContent=scc
            }else{
                document.querySelector('body').style.backgroundColor='red'
                document.querySelector(".message").textContent='loss the game'
            }
    }// when input is === guess number
    else{
        console.log(typeof guess);
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').textContent=numbers
        document.querySelector(".message").textContent='correct number'
        if(scc>High){
            High=scc
            document.querySelector('.highscore').textContent=scc

        }
    }   
})

document.querySelector('.again').addEventListener('click',function(){
    scc=20
    const numbers=Math.trunc(Math.random()*20)+1
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector(".message").textContent='Start guessing...'
    document.querySelector('.score').textContent=scc
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value='';



})