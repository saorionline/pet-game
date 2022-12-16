//ataqueEnemigo
let enemyPower
//ataqueJugador del que le da el poder a la mascota
let gamerAtac 
//vidasJugador
let lifeCounter = 3
//vidasEnemigo
let robotLife = 3

// Name Pet 


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

    let inputHipogoge = document.getElementById('pet-postal-1')
    const setGamerPet = document.getElementById('gamer-pet')

   if(inputHipogoge.checked) {
    //spanMascotaJugador 
    setGamerPet.innerHTML = 'Hipogoge'
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
        announceWinner('You won by default!')
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
        
    }  
    fight()
}

   //START FIGHT! -- ataqueJugador 
function fight() {
    // spanVidasJugador -- vidas-jugador
    const spanLifeCounter = document.getElementById('human-life')
    // spanVidasEnemigo -- vidas-enemigo
    const spanRobotLife = document.getElementById('robot-life')
    //ataqueJugador -- ataqueEnemigo
    if(gamerAtac == enemyPower){
        //crearMensaje
        announceWinner(" Match ")
    } else {
        announceWinner(" Lost ")
    }
    }
   
// crearMensajeFina(resultadoFinal)
function endGame(deadMark) {
    //sectionMensajes
    const singResult = document.getElementById('board')
    singResult.innerHTML = deadMark

    let waterPower = document.getElementById('water-push')
    waterPower.disabled = true
    //sectionReiniciar --reiniciar
    const hideReload = document.getElementById('reload')  
    hideReload.style.display='block'
}
function reloadAgain() {
    location.reload()
}
// crearMensaje(resultado)
function announceWinner(board) {
    //sectionMensajes
    const singResult = document.getElementById('board')
    // nueva Jugada
    let showCase = document.createElement('p')
    singResult.innerHTML = board  

    singResult.appendChild(showCase)
}
function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)