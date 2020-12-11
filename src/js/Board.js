class Board {

    // array containing the data in the tictactoe game board.
    data

    constructor() {
        this.data = []
    }

    /**
     * Updates the box on the board to be claimed by the player.
     * @param {int} box The box to update.
     * @param {int} player The player who is trying to claim the box.
     * @returns {boolean} False if the box is already claimed, true otherwise.
     */
    click(box, player) {
        console.log(box)
        console.log(this.data)
        // if the box is already claimed
        if (this.data[box - 1] != null) {
            console.log("already used")
            return false
        }

        console.log("not used")
        this.data[box - 1] = player
        return true
    }

    /**
     * Determines if three consecutive boxes have been claimed by the same player.
     * @returns {boolean} True if the game has been one, false otherwise.
     */
    isWin() {
        return (this.data[0] != null && this.data[0] === this.data[1] && this.data[1] === this.data[2])
            || (this.data[3] != null && this.data[3] === this.data[4] && this.data[4] === this.data[5])
            || (this.data[6] != null && this.data[6] === this.data[7] && this.data[7] === this.data[8])
            || (this.data[0] != null && this.data[0] === this.data[3] && this.data[3] === this.data[6])
            || (this.data[1] != null && this.data[1] === this.data[4] && this.data[4] === this.data[7])
            || (this.data[2] != null && this.data[2] === this.data[5] && this.data[5] === this.data[8])
            || (this.data[0] != null && this.data[0] === this.data[4] && this.data[4] === this.data[8])
            || (this.data[2] != null && this.data[2] === this.data[4] && this.data[4] === this.data[6])
    }

    /**
     * Determines if the board is full.
     * @returns {boolean} True if the board is full.
     */
    isFull() {
        let count = 0
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] != null) count++
        }
        return count >= 9
    }

    /**
     * Clears the board.
     */
    clear() {
        this.data = []
    }

}

module.exports = Board
