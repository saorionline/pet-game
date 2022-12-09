function randomOption(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min)
}
// Match what the User chose and what it belongs to
function pickItem(strategy){
    let result = ""
    if(strategy == 1){
        result = " Rock 🪨"
    } else if (strategy == 2){
        result= " Paper 📃"
    } else if (strategy == 3) {
        result=" Scissors ✂️"
    } else {
        alert("Bad Gateway")
    }
    return result
}

// Shows what the Machine chose

let gamer = 0
let tech = 0

let countWin = 0
let countLost = 0

while( countWin < 3 && countLost < 3) {
    tech = randomOption(1 ,3)
    gamer = prompt("Pick 1 for Rock, 2 for Paper and 3 for Scissors")

    alert("Machine chose" + pickItem(tech))
    alert("You chose" + pickItem(gamer))

    //START FIGHT!
    if(tech == gamer){
        alert("MATCH")
    } else if (gamer == 1 && tech == 3 ) {
        alert("You Win!")
        countWin = countWin + 1
    } else if (gamer == 2 && tech == 1 ) {
        alert("You Win!")
        countWin = countWin + 1
    } else {
        alert("Machine Wins!")
        countLost = countLost + 1
    }
}

alert("You win " + countWin + " times. You lost " + countLost +" times. ")