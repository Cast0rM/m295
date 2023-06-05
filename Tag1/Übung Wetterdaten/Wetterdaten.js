// var https = require('https')
// let url = "https://the-trivia-api.com/v2/questions"

// https.get(url, (response)=>{
//     response.setEncoding('utf-8');
//     response.on('data', console.log)
//     response.on('error', console.error)
// })

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
 .then((response)=> response.json())
 .then((data)=>{
    console.log(`Die Daten sind: ${data.hourly.time}`)
 })