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
let enemyPetPower 
let waterPower 
let firePower 
let earthPower 
// botones
let buttonDefend = []
let lifeCounter = 3
let robotLife = 3

//indexAtaqueJugador
let upsColection
let colectionDowns

//ataquesDelJugar
const localScreen = document.getElementById('see-local')
//ataquesDelEnemigo
const frameVisitor = document.getElementById('visitor-screen')
//victoriasJugador
playerWin = 0
//victoriasEnemigo
winRobot = 0

//sectionVerMapa ver-mapa
const boxLocate = document.getElementById('place-map')
// mapa
const framePoint = document.getElementById('mapper')
// lienzo
let artWork = framePoint.getContext('2d')
//intervalo
let pieceTime
// mapaBackground
let spaceSee = new Image()
spaceSee.src = './assets/world.jpg'
//mascotaJugadorObjeto
let creature
//alturaQueBuscamos
let longMeasure
//anchoDelMapa
let latitude = window.innerWidth - 20
longMeasure = latitude * 400 / 999
//mapa
framePoint.width = latitude
framePoint.height = longMeasure
//anchoMaximoDelMapa
const maxTake = 350

if (latitude > maxTake ) {
    latitude = maxTake - 20
}


//mokepon 
class superPet {
    constructor(name, photo, life) {
        this.name = name
        this.photo = photo
        this.life = life
        this.powers = []
        // ancho
        this.hoWide = 120
        this.howTall = 120
        this.x = randomOption( 0, framePoint.width - this.hoWide)
        this.y = randomOption( 0, framePoint.height - this.howTall)        
        //mapaFoto 
        this.imgPet = new Image()
        this.imgPet.src = photo
        //velocidadX
        this.xSpeed = 0
        this.ySpeed = 0 
    }
    placeFigure() {
        //lienzo
        artWork.drawImage(
        // capipepo mapaFoto
        this.imgPet,
        this.x,
        this.y,
        this.hoWide,
        this.howTall
    )
    }
}

let hipogoge = new superPet('Hipogoge', './assets/doll.png', 5)
let capi = new superPet('Capi', './assets/capi.png', 5)
let ratigueya = new superPet('Ratigueya', './assets/robot.png', 5)
let obstacle = new superPet(' Allien', './assets/allien.png', 5)

hipogoge.powers.push(
    {
        name: '💧' , 
        id: 'water-push'
    },
    {
        name: '💧' , 
        id: 'water-push'
    },
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
        name: '🌱', 
        id: 'earth-push'
    },
    {
        name: '🌱', 
        id: 'earth-push'
    },
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
        name: '🔥', 
        id: 'fire-push'
    },
    {
        name: '🔥', 
        id: 'fire-push'
    },
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
//revisarColision 
function reviewOverlap(antagonist) {
    const yUpRobot = antagonist.y
    const robotBottom = antagonist.y + antagonist.hoWide
    const rightEnemy = antagonist.x + antagonist.howTall
    const opponentLeft = antagonist.x

    const limitUpPet = creature.y
    const bottomYpet = creature.y + creature.hoWide
    const rightAnimal = creature.x + creature.howTall
    const petLeft = creature.x
    if (
        //abajoMascota    arribaEnemigo
        bottomYpet < yUpRobot ||
        //arribaMascota     abajoEnemigo
        limitUpPet > robotBottom ||
        //derechaMascota     izquierdaEnemigo
        rightAnimal < opponentLeft ||
        //izquierdaMascota   derechaEnemigo
        petLeft > rightEnemy
    ) { return
    } 
    stop()
    grabHiddenSection.style.display = 'flex'
    boxLocate.style.display = 'none'
    enemyPet(artificial)
}
//obtenerObjetosMascota
function matchPet () {
    for (let index = 0; index < superPets.length; index++){
        if(petPlayer === superPets[index].name) {
            return superPets[index]
        }
    }
}

//iniciarMapa
function initiateZone() {
    creature = matchPet(petPlayer)
    
    pieceTime = setInterval(paintAnimal, 50)
    window.addEventListener('keydown', keyPressed)
    window.addEventListener('keyup', stop)
}   

// iniciarJuego 
function startGame(){
    //sectionSeleccionarAtaque
    grabHiddenSection.style.display = 'none'
    boxLocate.style.display = 'none'
    superPets.forEach((superPet) => {
        //opcionDeMokepones
        infoAccordion = `
        <input type="radio" name="pet" id=${superPet.name} />
        <label class= "pet-card" for=${superPet.name} >
            <img src=${superPet.photo} alt=${superPet.name} />
        </label>
        `
        //contenedorTarjetas
        cardsBox.innerHTML += infoAccordion

        inputHipogoge = document.getElementById('Hipogoge')
        inputCapi = document.getElementById('Capi')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    petPress.addEventListener('click', gamerOption)
    reloadButton.addEventListener('click', reloadAgain)     
}

//detenerMovimiento
function stop() {
    //mascotaJugadorObjeto
    creature.xSpeed = 0
    creature.ySpeed = 0
}
// sePresionaUnaTecla
function keyPressed(event) {
    switch(event.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break  
        case 'ArrowLeft':
            left()
            break   
        case 'ArrowRight':
            right()
            break 
        default:
            break;    
    }
}
//moverDerecha
function right() {
    creature.xSpeed = 5
    paintAnimal()
}
//moveAround
function left() {
    creature.xSpeed = - 5
    paintAnimal()
}
//moverAbajo
function down() {
    creature.ySpeed = 5
    paintAnimal()
}
//moverArriba
function up() {
    creature.ySpeed = - 5
    paintAnimal()
}
//pintarPersonaje
function paintAnimal() {
    creature.x = creature.x + creature.xSpeed
    creature.y = creature.y + creature.ySpeed
    artWork.clearRect(0, 0, framePoint.width, framePoint.height)
    artWork.drawImage(
        spaceSee,
        0,
        0,
        framePoint.width,
        framePoint.height
    )
    creature.placeFigure()
    obstacle.placeFigure()
    if ( creature.xSpeed != 0 || creature.ySpeed != 0) {
        reviewOverlap(obstacle)
    }
}
// seleccionarMascotaJugador
function gamerOption() {
    hidePet.style.display = 'none'
   
   if(inputHipogoge.checked) {
    //spanMascotaJugador
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
   boxLocate.style.display = 'flex'
   //intervalo
  initiateZone()
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
    //ataques  --- ataque
    powers.forEach((power) => {
        //ataquesMokepon
        extractAtacks = `
        <button id=${power.id} class="power defend">${power.name}</button>
        `
        //contenedorAtaques
        boxPowerButtons.innerHTML += extractAtacks
    })
    buttonDefend = document.querySelectorAll('.defend')
    waterPower = document.getElementById('water-push')
    firePower = document.getElementById('fire-push')
    earthPower = document.getElementById('earth-push')
}
//secuenciaAtaque
function oneByOne() {
    //botones
    buttonDefend.forEach((defendButton) => {
        //boton
        defendButton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥') {
                gamerAtac.push('Fire')
                console.log(gamerAtac)
                defendButton.style.background ='#112f58'
                defendButton.disabled = true
            } else if (e.target.textContent === '💧') {
                gamerAtac.push('Water')
                console.log(gamerAtac)
                defendButton.style.background ='#112f58'
                defendButton.disabled = true
            } else {
                gamerAtac.push('Earth')
                console.log(gamerAtac)
                defendButton.style.background ='#112f58'
                defendButton.disabled = true
            }
            startEnemyAtac()
        })
    })
}
// seleccionarMascotaEnemigo
function enemyPet() {
    let randomPet = randomOption(0 , superPets.length - 1)
    //spanMascotaEnemigo
    setEnemyPet.innerHTML = superPets[randomPet].name
    enemyPetPower = superPets[randomPet].powers
    oneByOne()
}
// ataqueAleatorioEnemigo
function startEnemyAtac() {
    let randomAtac = randomOption(0 , enemyPetPower.length -1)
    if (randomAtac == 0 || randomAtac == 1) {
        enemyPower.push('Water')
    } else if(randomAtac == 3 || randomAtac == 4) {
        enemyPower.push('Fire')
    } else {
        enemyPower.push('Earth')
    }  
    console.log(enemyPower)
    //iniciarPelea
    confrontation()
}
//iniciarPelea
function confrontation() {
    if (gamerAtac.length === 5) {
        fight()
    }
}
// indexAmbosOponentes(jugador, enemigo) 
function betweenFight(human, artificial){
    //indexAtaqueJugador = ataqueEnemigo[jugador]
     upsColection = gamerAtac[human]
    //indexAtaqueJugador = ataqueEnemigo[jugador]
    colectionDowns = enemyPower[artificial]
}
   //START FIGHT!
   //combate 
function fight() {
    //ataqueJugador
    for( let index=0; index < gamerAtac.length; index++) {
       if( gamerAtac[index] === enemyPower[index]) {
        //indexAmbosOponentes
        betweenFight(index, index)
        //crearMensaje
        announceWinner("Match")
    } else if (gamerAtac[index] === 'Fire' && enemyPower[index] === 'Earth'){
        betweenFight(index, index)
        announceWinner("You win!")
        playerWin++
        spanLifeCounter.innerHTML = playerWin
    } else if (gamerAtac[index] === 'Water' && enemyPower[index] === 'Fire'){
        betweenFight(index, index)
        announceWinner("You win!")
        playerWin++
        spanLifeCounter.innerHTML = playerWin
    } else if (gamerAtac[index] === 'Earth' && enemyPower[index] === 'Water'){
        betweenFight(index, index)
        announceWinner("You win!")
        playerWin++
        spanLifeCounter.innerHTML = playerWin
    } else {
        betweenFight(index, index)
        announceWinner("You lose")
        winRobot++
        spanRobotLife.innerHTML = winRobot
    }
    lifeDoc()}
}// revisarVidas
function lifeDoc() {
    //sectionReload.style.display = 'flex'
//vidasEnemigo
    if(playerWin === winRobot) {
        endGame("Match Match")
    } else if (playerWin > winRobot) {
        endGame("Crack")
    } else {
        endGame("Game Over")
    } 
}    
// crearMensajeFinal(resultadoFinal)
function endGame(deadMark) {

    singResult.innerHTML = deadMark

    sectionReload.style.display = "block"

}
// reiniciarJuego 
function reloadAgain() {
    location.reload()
}
// crearMensaje (resultado)
function announceWinner(resultFight) {
    // when both enemyPower and gamerAtac were in the same board
    /* let showFight = document.createElement('p')
    showFight.innerHTML = enemyPower + gamerAtac */
 // nuevoAtaqueDelJugador  ---- nuevoAtaqueDelJugador
    let newFromHuman = document.createElement('p')
    let robotNewBack = document.createElement('p')
// sectionMensajes     resultado
    singResult.innerHTML = resultFight

    newFromHuman.innerHTML = upsColection
    robotNewBack.innerHTML = colectionDowns
    
    localScreen.appendChild(newFromHuman)
    frameVisitor.appendChild(robotNewBack)

}
// aleatorio
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)