var saveScorebtn = document.getElementById('saveScore')
var username = document.getElementById('username')
var finalTime = document.getElementById('final-time')
var mostRecentTime = localStorage.getItem('mostRecentTime')

var highScores = JSON.parse(localStorage.getItem('highscores'))


saveHighScore = e =>{
    e.preventDefault()

    var score = {
        score: mostRecentTime,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}
