const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

//Jugador
class Member {
    constructor(id) {
        this.id = id
    }
    //asignar
    assignMokepon(mokepon) {
        this.mokepon = mokepon
    }
    //actualizar
    updatePosition(x, y) {
        this.x = x
        this.y = y
    }
}

class Mokepon {
    constructor(name) {
        this.name = name
    }
}
//jugador
const members = []
//"/unirse"
app.get( "/login", (req, res) => {
    const id = `${Math.random()}`
    const member = new Member(id)
    members.push(member)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})
app.post("/mokepon/:memberId", (req, res) => {
    const memberId = req.params.memberId || ""
    const name = req.body.mokepon || ""
    const mokepon = new Mokepon(name)

    //jugadorIndex jugadores
    const memberIndex = members.findIndex((member) => memberId === member.id)

    if (memberIndex >=0) {
        members[memberIndex].assignMokepon(mokepon)
    }
    console.log(members)
    console.log(memberId)
    res.end()
}) 

app.post("/mokepon/:memberId/locate", (req, res) => {
    const memberId = req.params.memberId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const memberIndex = members.findIndex((member) => memberId === member.id)

    if (memberIndex >=0) {
        members[memberIndex].updatePosition(x, y)
    }
    
    res.end()
})
app.listen( 8080, () => {
    console.log(" On the air ")
})