/*----- constants -----*/
const colors = {
    '1': 'blue',
    '-1': 'red',
    'null': 'yellow'
};
const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


/*----- app's state (variables) -----*/
let board;  /* Represents squares */
let Playerturn;        /* Remember whose turn */
let winner; 
let winningCombo;     /* player that won, tie or in play */

/*----- cached element references -----*/
let squares = 

/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', handleSquareClick);
/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    playerTurn = -1;
    document.querySelector('h2').innerText =  `Player X's Turn`
    // player turn * -1 sets the player turn to 1 each time it is multiplied the turn switchs. If player turn is equal to -1 then it is -1 turn, if turn is equal to 1 it is player 1 turn.
    winner = null;

    // if winner is -1 or 1, 'T' means tie. 
    // render();
};



function render(b) {
    // render those state variables to the page 
    // render the board
    if (playerTurn === -1) {
     b.innerText = 'X';
    } else {
        b.innerText = 'O';
    }
    wins.forEach(function(e) {
        if(Math.abs(board[e[0]] + board[e[1]] + board[e[2]]) === 3) {
            winningCombo = [e[0], e[1], e[2]]
            console.log(winningCombo);
            bored.style.pointerEvents = 'none';
            winner = "winner"

            document.getElementById(e[0]).style.backgroundColor = 'white';
            document.getElementById(e[0]).style.color = 'black';
            document.getElementById(e[1]).style.backgroundColor = 'white';
            document.getElementById(e[1]).style.color = 'black';
            document.getElementById(e[2]).style.backgroundColor = 'white';
            document.getElementById(e[2]).style.color = 'black';
           
            if(playerTurn === -1) {
                document.querySelector('h2').innerText = `X WINS!`
                
            } else {
                document.querySelector('h2').innerText = `O WINS!`
                }
                // init();
            
        } if (!board.includes(null) && winner !== "winner") {
            document.querySelector('h2').innerText = `Tie`}
    })
    
    // for (i = 0; i < 24; i++) {
        // wins[i][1]}
        //each iteration goes through winningNums array
        //Set the background color of the current element by using the value as a key on the colors lookup object (constant).
    
}
// 		4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
// 	4.3) Wait for the user to click a square

function handleSquareClick(evt) {
    let i = evt.target.id;
    let b = evt.target;
    if(board[i] || evt.target.id === "bored") return;
    if (board[i] === null) {
        board[i] = playerTurn;
    }
    if(winner !== null){
        //change Html to winner 
        return;

    }
    if (playerTurn === -1) {
        document.querySelector('h2').innerText = "Player O's Turn"
    } else {
        document.querySelector('h2').innerText = " Player X's Turn"
    }
    render(b);
    playerTurn *= -1;
    console.log(board)
}


// 	5.6) Set the winner variable if there's a winner:
// 		5.6.1) Loop through the each of the winning combination arrays defined.
// 		5.6.2) Total up the three board positions using the three indexes in the current combo.
// 		5.6.3) Convert the total to an absolute value (convert any negative total to positive).
// 		5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
// 	5.7) If there's no winner, check if there's a tie:
// 		5.7.1) Set winner to 'T' if there are no more nulls in the board array.
// 	5.8) All state has been updated, so render the state to the page (step 4.2).


// 6) Handle a player clicking the replay button:
// 	6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).

