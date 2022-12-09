function startGame(){
    let petPress = document.getElementById('pet-press')
petPress.addEventListener('click', gamerOption)
}

function gamerOption() {
   if(document.getElementById('hipogoge').checked) {
    alert('Hipogoge is your pet')
   }
}

window.addEventListener('load', startGame)