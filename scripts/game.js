let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ["button1", "button2", "button3", "button4"],
};

const newGame = () => {
  game.score = 0;
  game.playerMoves = []
  game.currentGame = []
  showScore()
  addTurn()
};

const showScore = () => document.getElementById("score").innerText = game.score

const addTurn = () => {
    game.playerMoves = []
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns()
}

const lightsOn = (circ) => {
    document.getElementById(circ).classList.add("light")
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light")  
    },400)
}



module.exports = {
  game,
  newGame,
  addTurn,
  lightsOn
};

