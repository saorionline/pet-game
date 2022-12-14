
//LifeDoc
const showReload = document.getElementById('reload')
//Announcer
const singResult = document.getElementById('board')
//Fight
const spanLifeCounter = document.getElementById('gamer-life')
const spanRobotLife = document.getElementById('robot-life')
// Select Pet
const hidePet = document.getElementById('choose-pet')
const grabHiddenSection = document.getElementById('select-ataq')
// Select Power
const hideReload = document.getElementById('reload')
const petPress = document.getElementById('pet-press')
const waterPower = document.getElementById('water-push')
const firePower = document.getElementById('fire-push')
const earthPower = document.getElementById('earth-push')
const reloadButton = document.getElementById('game-push')

// Name Pet 
const setGamerPet = document.getElementById('gamer-pet')
const setEnemyPet = document.getElementById('opponent-pet')

// Start Game and Select Pet first part main variable
const cardsBox = document.getElementById('card-box-code')

//Other Variables

let superPets=[]
let gamerAtac 
let enemyPower 

let infoAccordion
let inputHipogoge 
let inputCapi 
let inputRatigueya 

let lifeCounter = 3
let robotLife = 3

class superPet {
    constructor(name, photo, life) {
        this.name = name
        this.photo = photo
        this.life = life
        this.power = []
    }
}

let hipogoge = new superPet('Hipogoge', './assets/hipogoge.png', 3)
let capi = new superPet('Capi', './assets/capi.png', 3)
let ratigueya = new superPet('Ratigueya', './assets/ratigueya.png', 3)

hipogoge.power.push(
    {
        name: 'Water', 
        id: 'water-push'
    },
    {
        name: 'Fire', 
        id: 'fire-push'
    },
    {
        name: 'Earth', 
        id: 'earth-push'
    }
)
capi.power.push(
    {
        name: 'Water', 
        id: 'water-push'
    },
    {
        name: 'Fire', 
        id: 'fire-push'
    },
    {
        name: 'Earth', 
        id: 'earth-push'
    }
)

ratigueya.power.push(
    {
        name: 'Water', 
        id: 'water-push'
    },
    {
        name: 'Fire', 
        id: 'fire-push'
    },
    {
        name: 'Earth', 
        id: 'earth-push'
    }
)

superPets.push( hipogoge, capi, ratigueya)
    
function startGame(){
    grabHiddenSection.style.display = 'none'

    superPets.forEach((superPet) => {
        infoAccordion = `
        <input type="radio" name="pet" id=${superPet.name} />
        <label class= "pet-card" for=${superPet.name} >
            <img src=${superPet.photo} alt=${superPet.name} />
        </label>
        `
        cardsBox.innerHTML += infoAccordion

        inputHipogoge = document.getElementById('Hipogoge')
        inputCapi = document.getElementById('Capi')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    petPress.addEventListener('click', gamerOption)
    waterPower.addEventListener('click', waterAtac)
    firePower.addEventListener('click', fireAtac)
    earthPower.addEventListener('click', earthAtac)
    reloadButton.addEventListener('click', reloadAgain)     
}

function gamerOption() {
    hidePet.style.display = 'none'
    grabHiddenSection.style.display = 'flex'

   if(inputHipogoge.checked) {
    setGamerPet.innerHTML = 'Hipogoge'
   } else if (inputCapi.checked) {
    setGamerPet.innerHTML = 'Capi'
   } else if (inputRatigueya.checked) {
    setGamerPet.innerHTML = 'Ratigueya'
   } else {
    alert ('Please select a Pet')
   }  
   enemyPet()
}

function enemyPet() {
    let randomPet = randomOption(1 ,3)

    if (randomPet ==1) {
        setEnemyPet.innerHTML = 'Hipogoge'
    } else if(randomPet == 2) {
        setEnemyPet.innerHTML = 'Capi'
    } else {
        setEnemyPet.innerHTML = 'Ratigueya'
    } 
}

function waterAtac() {
    gamerAtac = 'Water'
    startEnemyAtac()
}

function fireAtac() {
    gamerAtac = 'Fire'
    startEnemyAtac()

}

function reloadAgain() {
    location.reload()
}

function earthAtac(){
    gamerAtac = 'Earth'
    startEnemyAtac()
}

function startEnemyAtac() {
    let randomAtac = randomOption(1 ,3)
    if (randomAtac ==1) {
        enemyPower = 'Water'
    } else if(randomAtac == 2) {
        enemyPower = 'Fire'
    } else {
        enemyPower = 'Earth'
    }  
    fight()}
   //START FIGHT!
function fight() {
    if(gamerAtac == enemyPower){
        announceWinner(" match ")
    } else if (gamerAtac == 'Water' && enemyPower == 'Fire' ) {
        announceWinner(" beat ")
        robotLife--
        spanRobotLife.innerHTML = robotLife
    } else if (gamerAtac == 'Earth' && enemyPower == 'Water' ) {
        announceWinner(" beat ")
        robotLife--
        spanRobotLife.innerHTML = robotLife
    }else if (gamerAtac == 'Fire' && enemyPower == 'Earth' ) {
        announceWinner(" beat ")
        robotLife--
        spanRobotLife.innerHTML = robotLife
        //countWin = countWin + 1
    } else {
        announceWinner(" lost ")
        lifeCounter--
        spanLifeCounter.innerHTML = lifeCounter
        //countLost = countLost + 1
    }
    lifeDoc()}

function lifeDoc() {
    showReload.style.display = 'flex'

    if(robotLife == 0) {
        endGame("Crack")
    } else if (lifeCounter == 0) {
        endGame("Game Over")
    } 
}    

function announceWinner(resultFight) {

    let showCase = document.createElement('p')
    showCase.innerHTML = 'Your ' + gamerAtac + resultFight + enemyPower

    singResult.appendChild(showCase)
}

function endGame(deadMark) {

    let showEnd = document.createElement('p')
    showEnd.innerHTML = deadMark

    singEnd.appendChild(showEnd)
    waterPower.disabled = true
    firePower.disabled = true 
    earthPower.disabled = true 
}

function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)