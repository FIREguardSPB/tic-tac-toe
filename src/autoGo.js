function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const autoGo = (board, setBoard, setXIsNext, xIsNext, winner, setVisibleWinner) => {
    let i
    i = getRandomInt(0, 8)
    console.log(winner, board[i], xIsNext)
    if (winner) {setVisibleWinner(true)}
    if (board[i]) return
    const boardCopy = [...board]
    console.log(i)
    boardCopy[i] = 'x'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
}