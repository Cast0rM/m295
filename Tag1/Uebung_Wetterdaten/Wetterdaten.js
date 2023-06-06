/*async "without async we can't use await*/ function displayWeatherData() {
   const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m" ^

      // Does the same like the async fetch:
      
      // const response = await fetch(url);
      // const data = await response.json
      // console.log(`Die Temperatur um: ${data.hourly.time[0]} betrug: ${data.hourly.temperature_2m[0]} °C`) 
      // console.log("Ich bin fertig")

      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            console.log(`Die Temperatur um: ${data.hourly.time[0]} betrug: ${data.hourly.temperature_2m[0]} °C`)
         })
         .then(() => {
            console.log("Ich bin fertig.")
         })
         .catch((error) => {
            console.error(error)
         });
}

displayWeatherData();



// var https = require('https')
// let url = "https://the-trivia-api.com/v2/questions"

// https.get(url, (response)=>{
//     response.setEncoding('utf-8');
//     response.on('data', console.log)
//     response.on('error', console.error)
// })