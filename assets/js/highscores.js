var saveScorebtn = document.getElementById('saveScore')
var username = document.getElementById('username')
var scoreEl = document.getElementById('score')
var mostRecentTime = localStorage.getItem('mostRecentTime')
var hsbtnEl = document.getElementById('hs-btn')
var scoresListEl = document.getElementById('score-list')
var resetbtnEl = document.getElementById('reset-btn')
var playAgainEl = document.getElementById('play-again')

var highScores = JSON.parse(localStorage.getItem('highScores')) || []

scoreEl.innerHTML = mostRecentTime


saveHighScore = e =>{
    e.preventDefault()

    hsbtnEl.remove();
    username.remove();
    scoreEl.remove();
    
    

    var score = {
        score: mostRecentTime,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('highScores', JSON.stringify(highScores))

    scoresListEl.innerHTML = highScores.map(score => {
        return '<li>' + score.name + '-' + score.score + "</li>"
    } )
}

highScores.sort((a,b) => {
    return b.score - a.score
})

scoresListEl.innerHTML = highScores.map(score => {
    return '<li>' + score.name + '-' + score.score + "</li>"})

scoresListEl.className = "score-list"

function reset(){
    localStorage.clear();

    window.location.assign("./highscores.html")
}

