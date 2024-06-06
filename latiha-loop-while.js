const readlineSync = require('readline-sync');

const berapaLantai = readlineSync.question('mau ngepel lantai berapa?(1-100)');

let i = 1;
while(i <= berapaLantai){
    //console.log(i)
    console.log(`lagi ngepel lantai ${i}`)
    i++;
}
