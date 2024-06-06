const readlineSync = require('readline-sync');

const daging = readlineSync.question('masak daging apa hari ini brodi?');
const dagingBeku = readlineSync.question('apa dagingnya beku brodi?');

if(dagingBeku !== 'beku' || daging ==='sapi'){
    console.log('daging bisa dimasak');
} 
else if(daging ==='ikan'){
    console.log('daging harus dibersihkan dahulu brodi');
}
else{
    console.log('daging tidak bisa dimasak');
}
    
