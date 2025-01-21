function initializeChessboard() {
    const chessboard = document.createElement("div")
    chessboard.classList.add("chessboard");
    document.body.appendChild(chessboard);

    let previousSquare = null;

    for (let row = 1; row <= 8; row++) {
        for (let column = 1; column <= 8; column++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.id = `square-${row}-${column}`;

            if ((row + column) % 2 === 0) {
                square.classList.add("white")
            } else {
                square.classList.add("black");
            }

            square.addEventListener("click", () => {
                
                if (previousSquare === square) {
                    return square.style.backgroundColor = previousSquare.classList.contains("white") ? "white" : "black";;
                }
                if (previousSquare) {
                    previousSquare.style.backgroundColor = previousSquare.classList.contains("white") ? "white" : "black";
                }
                square.style.backgroundColor = "red";
                previousSquare = square;
            });

            chessboard.appendChild(square);
        }
    }
}

initializeChessboard();
