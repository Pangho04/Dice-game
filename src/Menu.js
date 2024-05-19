export default function Menu({
  getDice,
  handlePlayerDices,
  player,
  handlePlayer,
  hadleplayerDice,
  handlePlayer1TurnScore,
  handlePlayer1TotalScore,
  handlePlayer2TurnScore,
  handlePlayer2TotalScore,
  handlePlayerHistory,
}) {
  function turnPlayer () {
    if (player === 'red') {
      handlePlayer('yellow')
    } else if (player === 'yellow') {
      handlePlayer('red')
    }
  }

  /**리셋 버튼 */
  function resetTurn () {
    handlePlayerDices = null;
    handlePlayer('yellow');
    handlePlayer1TurnScore([]);
    handlePlayer1TotalScore(0);
    handlePlayer2TurnScore([]);
    handlePlayer2TotalScore(0);
  }

/**함수묶음(주사위 던지기, 사용자 변경, 눈 기록, 총점수) */
  function throwBtn() {
    getDice();
    turnPlayer();
    handlePlayerHistory();
    hadleplayerDice();
  }

    return (
        <div className="menus">
            <button className='throw-Btn' onClick={throwBtn}>던지기</button>
            <button className='reset-Btn' onClick={resetTurn}>처음부터</button>
        </div>
    )
}
