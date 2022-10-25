let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");

let turn = 1;

let myStatus = document.getElementById("status");






const mainFunc = (x) => {
    // Player Condition
    if(turn === 1) {
        document.getElementById(x).innerHTML = 'O';
        turn = 2;
        document.getElementById("turn").innerHTML = 'Player Two Turn';
    } else if (turn === 2) {
        document.getElementById(x).innerHTML = 'X';
        turn = 1;
        document.getElementById("turn").innerHTML = 'Player One Turn';
    }

    // Functionality for 'O'
    if (c1.innerHTML === 'O' && c2.innerHTML === 'O' && c3.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c4.innerHTML === 'O' && c5.innerHTML === 'O' && c6.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c7.innerHTML === 'O' && c8.innerHTML === 'O' && c9.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c1.innerHTML === 'O' && c5.innerHTML === 'O' && c9.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c2.innerHTML === 'O' && c5.innerHTML === 'O' && c8.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c3.innerHTML === 'O' && c5.innerHTML === 'O' && c7.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c1.innerHTML === 'O' && c4.innerHTML === 'O' && c7.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } else if (c3.innerHTML === 'O' && c6.innerHTML === 'O' && c7.innerHTML === 'O') {
        myStatus.innerHTML = 'O Win'; 
    } 

    // Functionality for x
    if (c1.innerHTML === 'X' && c2.innerHTML === 'X' && c3.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win'; 
    } else if (c4.innerHTML === 'X' && c5.innerHTML === 'X' && c6.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win'; 
    } else if (c7.innerHTML === 'X' && c8.innerHTML === 'X' && c9.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    } else if (c1.innerHTML === 'X' && c5.innerHTML === 'X' && c9.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    } else if (c2.innerHTML === 'X' && c5.innerHTML === 'X' && c8.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    } else if (c3.innerHTML === 'X' && c5.innerHTML === 'X' && c7.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    } else if (c1.innerHTML === 'X' && c4.innerHTML === 'X' && c7.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    } else if (c3.innerHTML === 'X' && c6.innerHTML === 'X' && c7.innerHTML === 'X') {
        myStatus.innerHTML = 'X Win';
    }
    // Draw Condition...
    if (c1.innerText !== '' && c2.innerText !== '' && c3.innerText !== '' && c4.innerText !== '' && c5.innerText !== '' && c6.innerText !== '' && c7.innerText !== '' && c8.innerText !== '' && c9.innerText !== '' && myStatus.innerHTML === '') {
        myStatus.innerHTML = 'Draw';
    }
}

