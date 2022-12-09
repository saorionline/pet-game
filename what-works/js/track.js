function startGame(){
    let petPress = document.getElementById('pet-press')
petPress.addEventListener('click', gamerOption)
}

function gamerOption() {
    let inputHipogoge = document.getElementById('hipogoge')
    let inputCapi = document.getElementById('capi')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangos = document.getElementById('langos')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let sayGamerPet = document.getElementById('gamer-pet')

   if(inputHipogoge.checked) {
    sayGamerPet.innerHTML = 'Hipogoge'
   } else if (inputCapi.checked) {
    sayGamerPet.innerHTML = 'Capi'
   } else if (inputRatigueya.checked) {
    sayGamerPet.innerHTML = 'Ratigueya'
   } else if (inputLangos.checked) {
    sayGamerPet.innerHTML = 'Langos'
   } else if (inputTucapalma.checked) {
    sayGamerPet.innerHTML = 'Tucapalma'
   } else if (inputPydos.checked) {
    sayGamerPet.innerHTML = 'Pydos'
   } else {
    alert ('Please select a Pet')
   }  
   enemysPet()
}

function enemysPet(){
    let randomAtack = randomOption(1 ,6)
    let sayEnemysPet = document.getElementById('opponent-pet')

    if (randomAtack ==1) {
        sayEnemysPet.innerHTML = 'Hipogoge'
    } else if(randomAtack == 2) {
        sayEnemysPet.innerHTML = 'Capi'
    } else if(randomAtack == 3) {
        sayEnemysPet.innerHTML = 'Ratigueya'
    } else if(randomAtack == 4) {
        sayEnemysPet.innerHTML = 'Langos'
    } else if(randomAtack == 5) {
        sayEnemysPet.innerHTML = 'Tucapalma'
    } else {
        sayEnemysPet.innerHTML = 'Pydos'
    }
}

function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load', startGame)