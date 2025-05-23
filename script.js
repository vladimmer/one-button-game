const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const loseScreen = document.getElementById('lose-screen');
const loseSound = document.getElementById('lose-sound');

function showLoseScreen() {
  gameContainer.style.display = 'none';
  loseScreen.style.display = 'flex';
  loseSound.currentTime = 0;
  loseSound.play();
}

function restartGame() {
  loseSound.pause();
  loseSound.currentTime = 0;
  loseScreen.style.display = 'none';
  gameContainer.style.display = 'flex';
}

startButton.addEventListener('click', showLoseScreen);
loseScreen.addEventListener('click', restartGame);
document.addEventListener('keydown', () => {
  if (loseScreen.style.display === 'flex') {
    restartGame();
  }
});
