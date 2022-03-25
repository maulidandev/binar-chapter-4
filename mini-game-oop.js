class Game{
    constructor(){
        this.player = new Player("Player", "player-number")
        this.computer = new Player("Computer", "computer-number")
    }

    run(){
        this.player.randomScore()    
        this.computer.randomScore()

        let winner = this.#getWinner()
        this.#showWinner(winner)
    }

    #getWinner(){
        if(this.player.score > this.computer.score){
            // player menang
            return "Pemenangnya adalah Player"
        }else if(this.player.score < this.computer.score){
            // computer menang
            return "Pemenangnya adalah Computer"
        }else{
            // seri
            return "Permainan seri"
        }
    }

    // simbol # menandakan method random di set menjadi private
    #showWinner(text){
        let winner = document.getElementById("winner")
        winner.textContent = text
    }
}

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

    // simbol # menandakan method random di set menjadi private
    #random(){
        return Math.floor(Math.random() * 100 + 1)
    }
}

function start(){
    let game = new Game()
    game.run()    
}