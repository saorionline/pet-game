let gamerAtac 
let enemyPower 
    
function startGame(){
    let petPress = document.getElementById('pet-press')
petPress.addEventListener('click', gamerOption)

let waterPower = document.getElementById('water-push')
waterPower.addEventListener('click', waterAtac)
let firePower = document.getElementById('fire-push')
firePower.addEventListener('click', fireAtac)
let earthPower = document.getElementById('earth-push')
earthPower.addEventListener('click', earthAtac)
/* let airPower = document.getElementById('air-storm')
airPower.addEventListener('click', airAtac)
let eterPower = document.getElementById('eter-soft')
eterPower.addEventListener('click', eterAtac)
let gasPower = document.getElementById('gas-release')
gasPower.addEventListener('click', gasAtac) */
}

function gamerOption() {
    let inputHipogoge = document.getElementById('hipogoge')
    let inputCapi = document.getElementById('capi')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangos = document.getElementById('langos')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let setGamerPet = document.getElementById('gamer-pet')

   if(inputHipogoge.checked) {
    setGamerPet.innerHTML = 'Hipogoge'
   } else if (inputCapi.checked) {
    setGamerPet.innerHTML = 'Capi'
   } else if (inputRatigueya.checked) {
    setGamerPet.innerHTML = 'Ratigueya'
   } else if (inputLangos.checked) {
    setGamerPet.innerHTML = 'Langos'
   } else if (inputTucapalma.checked) {
    setGamerPet.innerHTML = 'Tucapalma'
   } else if (inputPydos.checked) {
    setGamerPet.innerHTML = 'Pydos'
   } else {
    alert ('Please select a Pet')
   }  
   enemyPet()
}

function enemyPet(){
    let randomPet = randomOption(1 ,6)
    let setEnemyPet = document.getElementById('opponent-pet')

    if (randomPet ==1) {
        setEnemyPet.innerHTML = 'Hipogoge'
    } else if(randomPet == 2) {
        setEnemyPet.innerHTML = 'Capi'
    } else if(randomPet == 3) {
        setEnemyPet.innerHTML = 'Ratigueya'
    } else if(randomPet == 4) {
        setEnemyPet.innerHTML = 'Langos'
    } else if(randomPet == 5) {
        setEnemyPet.innerHTML = 'Tucapalma'
    } else {
        setEnemyPet.innerHTML = 'Pydos'
    }
}

function waterAtac() {
    gamerAtac = 'Water'
    startEnemyAtac()
}

function fireAtac(){
    gamerAtac = 'Fire'
    startEnemyAtac()

}

function earthAtac(){
    gamerAtac = 'Earth'
    startEnemyAtac()
}

/* function airAtac(){
    gamerAtac = 'Air'
    alert("You attacked with " + gamerAtac)
    startEnemyAtac()
}

function eterAtac(){
    gamerAtac = 'Eter'
    alert("You attacked with " + gamerAtac)
    startEnemyAtac()
}

function gasAtac(){
    gamerAtac = 'Gas'
    alert("You attacked with " + gamerAtac)
    startEnemyAtac()
} */

function startEnemyAtac() {
    let randomAtac = randomOption(1 ,3)

    if (randomAtac ==1) {
        enemyPower = 'Water'
    } else if(randomAtac == 2) {
        enemyPower = 'Fire'
    } /* else if(randomAtac == 3) {
        enemyPower = 'Gas'
        alert ("Your enemy attacked you with " + enemyPower)
    } else if(randomAtac == 4) {
        enemyPower = 'Air'
        alert ("Your enemy attacked you with " + enemyPower)
    } else if(randomAtac == 5) {
        enemyPower = 'Eter'
        alert ("Your enemy attacked you with " + enemyPower)
    } */ else {
        enemyPower = 'Earth'
    }
    
    fight()}


   //START FIGHT!
function fight() {
    if(gamerAtac == enemyPower){
        announceWinner("match ")
    } else if (gamerAtac == 'Water' && enemyPower == 'Fire' ) {
        announceWinner("beat ")
        // countWin = countWin + 1
    } else if (gamerAtac == 'Earth' && enemyPower == 'Water' ) {
        announceWinner("beat ")
        // countWin = countWin + 1
    }else if (gamerAtac == 'Fire' && enemyPower == 'Earth' ) {
        announceWinner("beat ")
        //countWin = countWin + 1
    } else {
        announceWinner("lost ")
        //countLost = countLost + 1
    }
}

function announceWinner(resultFight) {
    let singResult = document.getElementById('message')

    let showCase = document.createElement('p')
    showCase.innerHTML = 'Your ' + gamerAtac + resultFight + enemyPower

    singResult.appendChild(showCase)
}
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)