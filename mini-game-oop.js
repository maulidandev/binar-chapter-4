class Player{
    constructor(name, elementId){
        this.name = name
        this.elementId = elementId
    }

    randomScore(){
        let score = this.#random()

        let scoreElement = document.getElementById(this.elementId)
        scoreElement.textContent = score

        this.score = score
    }

    // tanda # menandakan function random di set menjadi private
    #random(){
        return Math.floor(Math.random() * 100 + 1)
    }
}

function start(){
    let player = new Player("Player", "player-number")
    player.randomScore()

    let computer = new Player("Computer", "computer-number")
    computer.randomScore()


    if(player.score > computer.score){
        // player menang
        setWinner("Pemenangnya adalah Player")
    }else if(player.score < computer.score){
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