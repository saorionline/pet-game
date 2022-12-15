//Reload

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
const reloadButton = document.getElementById('game-push')   


// Name Pet 
const setGamerPet = document.getElementById('gamer-pet')
const setEnemyPet = document.getElementById('opponent-pet')

// Start Game and Select Pet first part main variable
const cardsBox = document.getElementById('card-box-code')
const boxPowerButtons = document.getElementById('push-box')
//Other Variables

let extractAtacks
let petPlayer
let superPets=[]
let gamerAtac 
let enemyPower = []

let gamerOneByOne = []
let buttonDefend = []
let waterPower 
let firePower 
let earthPower 

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
        this.powers = []
    }
}

let hipogoge = new superPet('Hipogoge', './assets/hipogoge.png', 3)
let capi = new superPet('Capi', './assets/capi.png', 3)
let ratigueya = new superPet('Ratigueya', './assets/ratigueya.png', 3)

hipogoge.powers.push(
    {
        name: '💧' , 
        id: 'water-push'
    },
    {
        name: '🔥', 
        id: 'fire-push'
    },
    {
        name: '🌱', 
        id: 'earth-push'
    }
)
capi.powers.push(
    {
        name: '💧', 
        id: 'water-push'
    },
    {
        name: '🔥', 
        id: 'fire-push'
    },
    {
        name: '🌱', 
        id: 'earth-push'
    }
)

ratigueya.powers.push(
    {
        name: '💧', 
        id: 'water-push'
    },
    {
        name: '🔥', 
        id: 'fire-push'
    },
    {
        name: '🌱', 
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
    reloadButton.addEventListener('click', reloadAgain)     
}

function gamerOption() {
    hidePet.style.display = 'none'
    grabHiddenSection.style.display = 'flex'

   if(inputHipogoge.checked) {
    setGamerPet.innerHTML = inputHipogoge.id
    petPlayer = inputHipogoge.id
   } else if (inputCapi.checked) {
    setGamerPet.innerHTML = inputCapi.id
    petPlayer = inputCapi.id
   } else if (inputRatigueya.checked) {
    setGamerPet.innerHTML = inputRatigueya.id
    petPlayer = inputRatigueya.id
   } else {
    alert ('Please select a Pet')
   }  
   bringAtacks(petPlayer)
   enemyPet()
}
function bringAtacks(petPlayer){
    let powers
    for (let index = 0; index < superPets.length; index++){
        if(petPlayer === superPets[index].name) {
            powers = superPets[index].powers
        }
    }
    powersCase(powers)
}
function powersCase(powers) {
    powers.forEach((power) => {
        extractAtacks = `
        <button id=${power.id} class="power defend">${power.name}</button>
        `
        boxPowerButtons.innerHTML += extractAtacks
    })

    buttonDefend = document.querySelectorAll('defend')
    waterPower = document.getElementById('water-push')
    firePower = document.getElementById('fire-push')
    earthPower = document.getElementById('earth-push')


}

function oneByOne() {
    buttonDefend.forEach((defendButton) => {
        defendButton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥') {
                gamerOneByOne.push('Fire')
                console.log(gamerOneByOne)
                defendButton.style.background ='#112f58'
            } else if (e.target.textContent === '💧') {
                gamerOneByOne.push('Water')
                console.log(gamerOneByOne)
                defendButton.style.background ='#112f58'
            } else {
                gamerOneByOne.push('Earth')
                console.log(gamerOneByOne)
                defendButton.style.background ='#112f58'
            }
            startEnemyAtac()
        })
    })
}

function enemyPet() {
    let randomPet = randomOption(0 , superPets.length - 1)
    setEnemyPet.innerHTML = superPets[randomPet].name
    enemyPower = superPets[randomPet].powers
    oneByOne()
}


function startEnemyAtac() {
    let randomAtac = randomOption(0 , enemyPower.lenght -1)
    if (randomAtac == 0 || randomAtac == 1) {
        enemyPower.push('Water')
    } else if(randomAtac == 3 || randomAtac == 4) {
        enemyPower.push('Fire')
    } else {
        enemyPower.push('Earth')
    }  
    console.log(enemyPower)
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

function endGame(deadMark) {

    let showEnd = document.createElement('p')
    showEnd.innerHTML = deadMark

    singResult.appendChild(showEnd)
    waterPower.disabled = true
    firePower.disabled = true 
    earthPower.disabled = true 
}
function reloadAgain() {
    location.reload()
}
function announceWinner(resultFight) {

    let showCase = document.createElement('p')
    showCase.innerHTML = 'Your ' + gamerAtac + resultFight + enemyPower

    singResult.appendChild(showCase)
}
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)