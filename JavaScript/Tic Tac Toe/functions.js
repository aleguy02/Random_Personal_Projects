export function initializeBoard() {
    const board = [
        [' | | '],
        [' | | '],
        [' | | ']
    ]
    return board
}

export function printBoard(board) {
    for (const row in board) {
        console.log(board[row])
    }
}

export function splitPosition(turnPosition) {
    let newTurnPosition = turnPosition.split(',')
    for (let i in newTurnPosition) {
        newTurnPosition[i] = newTurnPosition[i].trim()
    }
    return newTurnPosition
}

export function checkIfValidPosition(turnPosition1, board) {
    let turnPosition = splitPosition(turnPosition1)
    const condition1 = turnPosition[0] === '1' || turnPosition[0] === '2' || turnPosition[0] === '3';  // checks validity of row position
    const condition2 = turnPosition[1] === '1' || turnPosition[1] === '2' || turnPosition[1] === '3';  // checks validity of column position
    const condition3 = turnPosition.length === 2 // checks that there's only 2 items in turnPosition

    if (!condition1 || !condition2 || !condition3) {
        return false        
    } else {  // Now we need to check if the position is taken
        return true
    }
}

export function playTurnPosition(turnPosition, board) {
    console.log(turnPosition, typeof(turnPosition))
}