let resultat = 0

for (let i = 2; i < process.argv.length; i++)
  resultat += Number(process.argv[i])

console.log(resultat)