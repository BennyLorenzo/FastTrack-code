function diceGame () {
    let score = 100;
    let roll = 0;
    let scoreChange = 0;
    for (let i = 1; i < 11; i++) {
        if (score < 0) {
            console.log("Your score is 0, the game is over!")
            break;
        }
        else {
            roll = Math.floor(Math.random() * 6 + 1)
            if (roll % 2 === 0) {
                if (roll === 2) {
                    scoreChange = roll + 10
                    score += scoreChange
                }
                else {
                    scoreChange = roll
                    score += scoreChange
                }
            }
            else if (roll % 2 > 0) {
                if (roll === 3 || roll === 5) {
                    scoreChange = -Math.round(score / 2) + 10
                    score += scoreChange
                }
                else {
                    scoreChange = -Math.round(score / 2)
                    score += scoreChange
                }
            }
            console.log(`Roll ${i}: ${roll} | Score changes: ${scoreChange} | Updated score: ${score}`)
            if (score < 0) {
                console.log("Your score is 0, the game is over!")
                break;
            }
        }
    }
}

diceGame();