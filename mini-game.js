function start(){
    let playerScore = Math.floor(Math.random() * 100 + 1)
    setScore("player-number", playerScore)

    let computerScore = Math.floor(Math.random() * 100 + 1)
    setScore("computer-number", computerScore)

    if(playerScore > computerScore){
        // player menang
        setWinner("Pemenangnya adalah Player")
    }else if(playerScore < computerScore){
        // computer menang
        setWinner("Pemenangnya adalah Computer")
    }else{
        // seri
        setWinner("Permainan seri")
    }
}

function setWinner(text){
    let winner = document.getElementById("winner")
    winner.textContent = text
}

function setScore(elementId, score){
    let scoreElement = document.getElementById(elementId)
    scoreElement.textContent = score
}