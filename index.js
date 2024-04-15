let homeEl = document.getElementById("home-el")
let GuestEl = document.getElementById("guest-el")
let homeHeader = document.getElementById("home-header")
let guestHeader = document.getElementById("guest-header")
let homeScore = 0
let guestScore = 0

function addOneHome () {
    homeScore += 1
    homeEl.textContent = homeScore
    highlighter()  
}

function addTwoHome () {
    homeScore += 2
    homeEl.textContent = homeScore
    highlighter()
}

function addThreeHome () {
    homeScore += 3
    homeEl.textContent = homeScore
    highlighter()
}


function addOneGuest () {
    guestScore += 1
    GuestEl.textContent = guestScore
    highlighter()
}

function addTwoGuest () {
    guestScore += 2
    GuestEl.textContent = guestScore
    highlighter()
}

function addThreeGuest () {
    guestScore += 3
    GuestEl.textContent = guestScore
    highlighter()
}

function newGame () {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    GuestEl.textContent = guestScore
    homeHeader.style.color = "#ffffff"
    guestHeader.style.color = "#ffffff"
}
function highlighter () {
    if (homeScore > guestScore) {
        homeHeader.style.color = "#047857"
        guestHeader.style.color = "#ffffff"
        
    } else if (guestScore > homeScore) {
        homeHeader.style.color = "#ffffff"
        guestHeader.style.color = "#047857"
    }  else {
        homeHeader.style.color = "#ffffff"
        guestHeader.style.color = "#ffffff"
    }
}