const readlineSync = require('readline-sync');

const berapaLantai = readlineSync.question('mau ngepel lantai berapa?(1-100)');

for(i = 1; i <= berapaLantai; i++){
    console.log(i)
    console.log(`lagi ngepel lantai ${i}`)
}
