const Board = require("./js/Board");
let board = new Board()

let player = 1
let game_over = false

/**
 * Takes a turn for the given player in the given box.
 * @param {int} box The box to update.
 */
function update(box) {
    if (!game_over) {
        let success = board.click(box, player)
        if (success) {
            let square = document.getElementById(box.toString())
            if (player === 1) {
                square.innerText = "X"
                square.classList.add("p1")
            } else {
                square.innerText = "O"
                square.classList.add("p2")
            }

            if (board.isWin()) {
                document.getElementById("game-message").innerText = "Player " + player + " wins!"
                game_over = true

            } else if (board.isFull()) {
                document.getElementById("game-message").innerText = "Cat's!"
                game_over = true

            } else {
                if (player === 1) {
                    player = 2
                } else {
                    player = 1
                }
                document.getElementById("game-message").innerText = "Player " + player + "'s turn."
            }
        }
    }
}

/**
 * Resets the game.
 */
function reset() {
    player = 1
    game_over = false
    let squares = document.getElementsByClassName("square")
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = ""
    }
    document.getElementById("game-message").innerText = "Player 1 goes first!"
    board.clear()
}
