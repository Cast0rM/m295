const fs = require('fs');

function leseDateiInhalt(filepath){
    return new Promise(function(resolve, reject){
        fs.readFile(filepath, (err, data)=>{
            if(!err)
            {
                resolve(data);
            }
            reject(err)
        });
    });
};
leseDateiInhalt(process.argv[2])
.then(inhalt => {
    console.log('Die Länge der Dateiinhalts beträgt: ' + inhalt.length)
})
.catch(err=> {
    console.error('Es gab einen Fehler: ' + err)
})