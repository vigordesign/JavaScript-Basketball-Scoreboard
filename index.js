let homeScr = document.getElementById("homeScr");
let guestScr = document.getElementById("guestScr");
let homeScore = 0
let guestScore = 0
let homeScoreLeader = document.getElementById("homeScoreBox");
let guestScoreLeader = document.getElementById("guestScoreBox");
let marqueeText = document.getElementById("marqueeText");


function addOneHome() {
    let addOne = homeScore += 1
    homeScr.textContent = addOne
    determineLeader()
}

function addTwoHome() {
    let addTwo = homeScore += 2
    homeScr.textContent = addTwo
    determineLeader()
}

function addThreeHome() {
    let addThree = homeScore += 3
    homeScr.textContent = addThree
    determineLeader()
}

function addOneGuest() {
    let addOne = guestScore += 1
    guestScr.textContent = addOne
    determineLeader()
}

function addTwoGuest() {
    let addTwo = guestScore += 2
    guestScr.textContent = addTwo
    determineLeader()
}

function addThreeGuest() {
    let addThree = guestScore += 3
    guestScr.textContent = addThree
    determineLeader()
}

function newGame() {
    homeScr.textContent = '00'
    guestScr.textContent = '00'
    homeScore = 0
    guestScore = 0
    homeScoreLeader.style.borderColor = "#02401b"
    guestScoreLeader.style.borderColor = "#02401b"
    marqueeText.textContent = "Get ready for a great game!"
}

// function marquee() {
//     if
// }

// DETERMINE LEADER

function determineLeader() {
    if (homeScore > guestScore) {
        homeScoreLeader.style.borderColor = "#bb9753"
        guestScoreLeader.style.borderColor = "#02401b"
        marqueeText.textContent = "Home is up!"
        }  else if (homeScore < guestScore) {
            homeScoreLeader.style.borderColor = "#02401b"
            guestScoreLeader.style.borderColor = "#bb9753"
            marqueeText.textContent = "Guest is up!"
        }  else {
            homeScoreLeader.style.borderColor = "#02401b"
            guestScoreLeader.style.borderColor = "#02401b"
            marqueeText.textContent = "Tie game!"
        }
    if (homeScore - guestScore > 10) {
        marqueeText.textContent = "Home takes a big lead!"
    } else if (guestScore - homeScore > 10) {
        marqueeText.textContent = "Guest takes a big lead!"
    }

}