//ataqueEnemigo
let enemyPower
//ataqueJugador del que le da el poder a la mascota
let gamerAtac 
//vidasJugador
let lifeCounter = 3
//vidasEnemigo
let robotLife = 3
//Announcer
const singResult = document.getElementById('board')

// Select Power
const hideReload = document.getElementById('reload')  
// Name Pet 
const setGamerPet = document.getElementById('gamer-pet')


//iniciarJuego
function startGame(){
    // sectionSeleccionarAtaque
    const grabHiddenSection = document.getElementById('select-ataq')
    grabHiddenSection.style.display = 'none'
    //sectionReiniciar
    const showReload = document.getElementById('reload')
    showReload.style.display = 'none'
    //botonMascotaJugador --- boton-mascota
    let petPress = document.getElementById('pet-press')
    petPress.addEventListener('click', gamerOption)
    //botonAgua -- boton-agua
    let waterPower = document.getElementById('water-push')
    waterPower.addEventListener('click', waterAtac)

    //botonReiniciar
    const reloadButton = document.getElementById('game-push') 
    reloadButton.addEventListener('click', reloadAgain)     
}

//seleccionarMascotaJugador
function gamerOption() {
        // Select Pet //seleccionarMascotaJugador //gamerOption // seleccionar-mascota
    const hidePet = document.getElementById('choose-pet')
    hidePet.style.display = 'none'
    //sectionSeleccionarAtaque --- seleccionar-ataque
    const grabHiddenSection = document.getElementById('select-ataq')
    grabHiddenSection.style.display = 'flex'

    let inputHipogoge = document.getElementById('Hipogoge')
    
   if(inputHipogoge.checked) {
    //spanMascotaJugador
    setGamerPet.innerHTML = inputHipogoge.id
   } else {
    alert ('Please select a Pet')
   }  
//seleccionarMascotaEnemigo

   enemyPet()
}

//seleccionarMascotaEnemigo
function enemyPet() {
    //mascotaAleatoria
    let randomPet = randomOption(1, 3)
    //spanMascotaEnemigo y mascota-enemigo
    const setEnemyPet = document.getElementById('opponent-pet')

    // mascotaAleatoria -- spanMascotaEnemigo 
    if (randomPet == 1) {
        //spanMascotaEnemigo
        setEnemyPet.innerHTML = 'Hipogoge'
    } else {
        alert('You won by default!')
    }
}
//ataqueAgua ataqueJugador
function waterAtac() {
    gamerAtac = 'Water'
    startEnemyAtac()
}
//ataqueAleatorioEnemigo --- aleatorio --- ataqueEnemigo
function startEnemyAtac() {
    //ataqueAleatorio
    let randomAtac = randomOption(1, 3)
    if (randomAtac == 1) {
        enemyPower = 'Water'
    } else {
        alert('The ods are in your favor')
    }  
    fight()
}

   //START FIGHT! -- ataqueJugador 
function fight() {
    // spanVidasJugador -- vidas-jugador
    const spanLifeCounter = document.getElementById('gamer-life')
    // spanVidasEnemigo -- vidas-enemigo
    const spanRobotLife = document.getElementById('robot-life')
    //ataqueJugador -- ataqueEnemigo
    if(gamerAtac == enemyPower){
        //crearMensaje
        announceWinner(" match ")
    } else if (gamerAtac == 'Water' && enemyPower != 'Water' ) {
        announceWinner(" beat ")
        //vidasEnemigo
        robotLife--
        spanRobotLife.innerHTML = robotLife
    } else {
        announceWinner(" lost ")
        //vidasJugador
        lifeCounter--
        spanLifeCounter.innerHTML = lifeCounter
        
    }
    //revisarVidas
    lifeDoc()}

function lifeDoc() {
    showReload.style.display = 'flex'

    if(robotLife == 0) {
        endGame("Crack")
    } else if (lifeCounter == 0) {
        endGame("Game Over")
    } 
}    
// crearMensajeFina(resultadoFinal)
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
// crearMensaje(resultado)
function announceWinner(resultFight) {

    let showCase = document.createElement('p')
    showCase.innerHTML = 'Your ' + gamerAtac + resultFight + enemyPower

    singResult.appendChild(showCase)
}
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)