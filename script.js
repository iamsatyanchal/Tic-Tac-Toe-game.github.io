const blocks = document.querySelectorAll('div');
const results = document.querySelector('.message');
const reset = document.querySelector('.reset');
const text = document.querySelector('.text');

const movement = [
    {answer: [1,2,3]},
    {answer: [1,4,7]},
    {answer: [2,5,8]},
    {answer: [3,6,9]},
    {answer: [4,5,6]},
    {answer: [7,8,9]},
    {answer: [7,5,3]},
    {answer: [1,5,9]},
]

let counter = 0;
let playerOneState = [];
let playerTwoState = [];
let playerOneWin = false;
let playerTwoWin = false;
let draw = false;


const playerOne = (a)=>{
    a.currentTarget.innerText = 'X'
    a.currentTarget.classList.add('red')
    counter++
    playerOneState.push(Number(box.dataset.number));
    function check(){
    for(let i = 0; i < movement.length; i++){
        let checker = ()=> movement[i].answer.every(v => playerOneState.includes(v));
        if(checker()){
            playerOneWin = true;
            results.classList.add('display');
            text.innerText = 'red player wins!';
            results.classList.add('redWins');
        }
    }
}
check();
}

const playerTwo = (a)=>{
    a.currentTarget.innerText = 'O';
    a.currentTarget.classList.add('blue')
    counter++
    playerTwoState.push(Number(box.dataset.number));
    function check(){
    for(let i = 0; i < movement.length; i++){
        let checker = ()=> movement[i].answer.every(v => playerTwoState.includes(v));
        if(checker()){
            playerTwoWin = true;
            results.classList.add('display');
            text.innerText = 'blue player wins!'
            results.classList.add('blueWins');
        }
    }
}
check();
}

blocks.forEach(e =>{
    e.addEventListener('click', function(a){
        box = a.currentTarget;
        if(box.innerText == '' && counter % 2 == 0){
            playerOne(a);
        } 
        else if (box.innerText == ''){
            playerTwo(a);
        }
        if(counter == 9 && playerOneWin == false && playerTwoWin == false){
            draw = true;
            console.log('draw');
            results.classList.add('display');
            text.innerText = 'Draw'
        }

        
    })
});


reset.addEventListener('click', ()=>{
    playerOneState = [];
    playerTwoState = [];
    counter = 0;
    playerOneWin = false;
    playerTwoWin = false;
    draw = false;
    blocks.forEach(e=>{
        e.innerText = '';
    })
    results.classList.remove('display');
    results.classList.remove('redWins');
    results.classList.remove('blueWins');
    blocks.forEach(e=>{
        e.classList.remove('red');
        e.classList.remove('blue');
    })
})