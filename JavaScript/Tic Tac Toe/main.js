// Tic Tac Toe baby lets get it

import * as Functions from './functions.js'


const prompt1 = 'Where would you like to play? Type input as "Row, Column" (i.e. 1, 3 for top right.)';
let playGame = confirm('Play game?')


while (playGame) {
    let currentBoard = Functions.initializeBoard();
    Functions.printBoard(currentBoard)
    while (true) {
        let turnPosition = prompt(prompt1);
        if (turnPosition) {
            if (Functions.checkIfValidPosition(turnPosition, currentBoard)) {
                turnPosition = Functions.splitPosition(turnPosition);  // turnPosition is now an array
                Functions.playTurnPosition(turnPosition, currentBoard)
            } else {
                alert('Invalid position')
                continue
            }
            
        } else {
            alert('You ended the game')
            break
        }
    }
playGame = confirm('Play again?')
}
