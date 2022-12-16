// sectionSeleccionarAtaque ---- seleccionar-ataque
const grabHiddenSection = document.getElementById('select-ataq')
// -- sectionReiniciar --- reiniciar ///// startGame  showReload         endGame hideReload lifeDoc
const sectionReload = document.getElementById('reload')
// startGame ---- botonMascotaJugador -- boton-mascota
const petPress = document.getElementById('pet-press')
// botonReiniciar     boton-reiniciar
const reloadButton = document.getElementById('game-push')

//startGame  showReload         endGame hideReload
sectionReload.style.display = 'none'
// seleccionarMascotaJugador -- gamerOption seleccionar-mascota Select Pet
const hidePet = document.getElementById('choose-pet')
// gamerOption ---- Name Pet ///// spanMascotaJugador 
const setGamerPet = document.getElementById('gamer-pet')
// spanMascotaEnemigo    mascota-enemigo
const setEnemyPet = document.getElementById('opponent-pet')

// sectionMensajes --- endGame -- announceWinner
const singResult = document.getElementById('board')
// fight --- spanVidasJugador --- vidas-jugador
const spanLifeCounter = document.getElementById('gamer-life')
// fight -- spanVidasEnemigo -- vidas-enemigo
const spanRobotLife = document.getElementById('robot-life')

// contenedorTarjetas --- Start Game and Select Pet first part main variable
const cardsBox = document.getElementById('card-box-code')
// contenedorAtaques
const boxPowerButtons = document.getElementById('push-box')
//Other Variables
//mokepones
let superPets=[]
// ataqueJugador 
let gamerAtac =[]
//ataqueEnemigo
let enemyPower = []
// opcionDeMokepones
let infoAccordion

let inputHipogoge 
let inputCapi 
let inputRatigueya 
// mascotaJugador
let petPlayer
// ataquesMokepon
let extractAtacks
// ataquesMokeponEnemigo
//let enemyPetPower 
let waterPower 
let firePower 
let earthPower 
// botones
let buttonDefend = []
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
// extraerAtaques
function bringAtacks(petPlayer){
    let powers
    for (let index = 0; index < superPets.length; index++){
        if(petPlayer === superPets[index].name) {
            powers = superPets[index].powers
        }
    }
    powersCase(powers)
}
// mostrarAtaques
function powersCase(powers) {
    powers.forEach((power) => {
        extractAtacks = `
        <button id=${power.id} class="power defend">${power.name}</button>
        `
        boxPowerButtons.innerHTML += extractAtacks
    })

    buttonDefend = document.querySelectorAll('.defend')
    waterPower = document.getElementById('water-push')
    firePower = document.getElementById('fire-push')
    earthPower = document.getElementById('earth-push')


}
//secuenciaAtaque
function oneByOne() {
    buttonDefend.forEach((defendButton) => {
        defendButton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥') {
                gamerAtac.push('Fire')
                console.log(gamerAtac)
                defendButton.style.background ='#112f58'
            } else if (e.target.textContent === '💧') {
                gamerAtac.push('Water')
                console.log(gamerAtac)
                defendButton.style.background ='#112f58'
            } else {
                gamerAtac.push('Earth')
                console.log(gamerAtac)
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
// revisarVidas
function lifeDoc() {
    sectionReload.style.display = 'flex'

    if(robotLife == 0) {
        endGame("Crack")
    } else if (lifeCounter == 0) {
        endGame("Game Over")
    } 
}    
// crearMensajeFinal(resultadoFinal)
function endGame(deadMark) {

    singResult.innerHTML = deadMark

    singResult.appendChild(showEnd)
    waterPower.disabled = true
    firePower.disabled = true 
    earthPower.disabled = true 

    sectionReload.style.display = "block"

}
function reloadAgain() {
    location.reload()
}
// crearMensajeResultado
function announceWinner(resultFight) {

    let showFight = document.createElement('p')
    showFight.innerHTML = enemyPower + gamerAtac
    
// sectionMensajes     resultado
    singResult.innerHTML = board
    singResult.appendChild(showFight)
    

}
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)