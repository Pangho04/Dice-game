import React from 'react';

export default function Card({
  name,
  diceImg,
  playerTurnScores,
  playerTotalScore,
}) {
  const playerHistory = playerTurnScores.join(', ');

  if (diceImg === 'yellow0') {
    diceImg = 'yellow01';
  } else if (diceImg === 'red0') {
    diceImg = 'red01';
  }

  return(
    <div className="card">
      <h4>{name}</h4>
      <img className='dices' src={require(`./image/dice-${diceImg}.png`)} alt={diceImg}/>
      <p className='score'>총점</p>
      <p>{playerTotalScore}</p>
      <p className='history'>기록</p>
      <p>{playerHistory}</p>
    </div>
  )
}
