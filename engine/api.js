const express = require('express')
const app = express()
const path = require("path");
const file = require('fs')

app.get('/player/:name',(req,res)=> {
    const player = req.params.name;
    //console.log(req.params.name)
    if(req.params.name == ''){
        res.status(301).send('Nie podano gracza')
    }
    const playersDB = JSON.parse(file.readFileSync(path.join(__dirname,'../db/players.json')))
    const playersList = playersDB.map(player => player.name)
    if(playersList.includes(player)){
        res.status(200).send(true)
    }else{
        res.status(400).send(false)
    }

});
app.post('/register/:name',(req,res)=> {
    const playersDB = JSON.parse(file.readFileSync(path.join(__dirname,'../db/players.json')))
    const player = req.params.name;
    playersDB.push({

            name:player,
            kill:0,
            dead:0,
            headHunt:0,


    })

    file.writeFileSync(path.join(__dirname,'../db/players.json'),JSON.stringify(playersDB))
    
    res.status(200).send('Zarejestrowano')
  

});


module.exports = app;