var zahl = process.argv[2];
function double(double, callback){
    callback(null, double * 2);
};

double(zahl, (err,data)=>{
    var result = data;
    console.log("Das Ergebnis ist: " + result);
});