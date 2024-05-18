import React, { useState, useEffect }from 'react';
import './App.css';
import Card from './Card';
import Menu from './Menu';

export default function App() {
  const [dice, setDice] = useState(null);
  const [playerTurn, setPlayerTurn] = useState('yellow');
  const [player1TurnScores,setPlayer1TurnScore] = useState([]);
  const [player1TotalScore, setPlayer1TotalScore] = useState(0);
  const [player2TurnScores,setPlayer2TurnScore] = useState([]);
  const [player2TotalScore, setPlayer2TotalScore] = useState(0);

  let player1Dice;
  let player2Dice;
  let dice1Img = `yellow0${player1TurnScores.slice(player1TurnScores.length - 1)}`;
  let dice2Img = `red0${player2TurnScores.slice(player2TurnScores.length - 1)}`;;

  useEffect(() => {
    rollDice();
  },[]);

  /**주사위 난수 생성 */
  function rollDice () {
    const newRoll = Math.floor(Math.random() * 6) + 1;

    setDice(newRoll);

    playerDice();
  }

  function playerDice () {
      if (playerTurn === 'yellow') {
        player1Dice = dice;
      } else if ( playerTurn === 'red') {
        player2Dice = dice;
      }
    }

  function setTotalScore (
    playerDice,
    playerTurnScores,
    setPlayerTurnScore,
    setPlayerTotalScore) {
    const playerScore = [...playerTurnScores, playerDice];
    setPlayerTurnScore(playerScore);

    const totalScore = playerScore.reduce((a, b) => a + b);
    setPlayerTotalScore(totalScore);
  }

  function setPlayerHistory () {
    if (playerTurn === 'yellow') {
      setTotalScore(dice, player1TurnScores, setPlayer1TurnScore, setPlayer1TotalScore)
    } else {
      setTotalScore(dice, player2TurnScores, setPlayer2TurnScore, setPlayer2TotalScore)
    }
  }

  return (
    <div className='contents'>
      <img className='logo' src={require('./image/logo.png')} alt={'logo'} />
      <h3>
        Dice game
      </h3>
      <Menu
        playerDice={dice}
        handlePlayer1Dice={setDice}
        getDice={rollDice}
        player={playerTurn}
        hadleplayerdice={playerDice}
        handlePlayer={setPlayerTurn}
        handlePlayer1TurnScore={setPlayer1TurnScore}
        handlePlayer1TotalScore={setPlayer1TotalScore}
        handlePlayer2TurnScore={setPlayer2TurnScore}
        handlePlayer2TotalScore={setPlayer2TotalScore}
        handlePlayerHistory={setPlayerHistory}
      />
      <div className='player-info'>
        <Card
          name={'Player1'}
          diceImg={dice1Img}
          playerTurnScores={player1TurnScores}
          playerTotalScore={player1TotalScore}
        />
        <Card
          name={'Player2'}
          diceImg={dice2Img}
          player={playerTurn}
          playerTurnScores={player2TurnScores}
          playerTotalScore={player2TotalScore}
        />
      </div>
    </div>
  );
}
