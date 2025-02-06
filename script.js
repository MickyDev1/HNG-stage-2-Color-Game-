const colorBox = document.getElementById("colorBox");
const colorButtons = document.querySelectorAll(".color-option");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");
let targetColor;
let score = 0;

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function startGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;
    
    let correctIndex = Math.floor(Math.random() * colorButtons.length);
    colorButtons.forEach((button, index) => {
        const color = index === correctIndex ? targetColor : getRandomColor();
        button.style.backgroundColor = color;
        button.onclick = () => checkAnswer(color);
    });
    gameStatus.textContent = "";
}

function checkAnswer(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
        score++;
        scoreDisplay.textContent = score;
        setTimeout(() => {
            gameStatus.textContent = "";
            startGame();
        }, 1000);
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
        setTimeout(() => {
            gameStatus.textContent = "";
        }, 1000);
    }
}

newGameButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
});

startGame();