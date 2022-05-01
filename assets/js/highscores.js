var saveScorebtn = document.getElementById('saveScore')
var username = document.getElementById('username')
var finalTime = document.getElementById('final-time')
var mostRecentTime = document.getElementById('mostRecentTime')

var highScores = JSON.parse(localStorage.getItem('highscores'))

finalTime.innerText = mostRecentTime

saveHighScore = e =>{
    e.preventDefault()

    var score = {
        score: mostRecentTime
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}