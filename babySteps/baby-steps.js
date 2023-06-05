var resultat = 0

for (var i = 2; i < process.argv.length; i++)
  resultat += Number(process.argv[i])

console.log(resultat)