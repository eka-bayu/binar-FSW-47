const readlineSync = require('readline-sync');

const suhu = readlineSync.question('berapa suhu oven?');

const panasGa = suhu < 100? 'tidak panas': 'panas';
console.log(panasGa);

console.log(suhu < 100? 'tidak panas': 'panas');